import { useState, useEffect, useRef, useCallback } from 'react';
import { useLoaderData } from 'react-router';
import { MapContainer, TileLayer } from 'react-leaflet';
import { EventsList, EventsMarkers, MapBounds, PanOnHover } from '@/components';
import { getEventsPage } from '@/data';
import 'leaflet/dist/leaflet.css';

const Events = () => {
  const initialData = useLoaderData();
  const [allEvents, setAllEvents] = useState(initialData.results);
  const [currentPage, setCurrentPage] = useState(initialData.currentPage);
  const [hasNextPage, setHasNextPage] = useState(initialData.hasNextPage);
  const [loading, setLoading] = useState(false);
  const [highlightedEvent, setHighlightedEvent] = useState(null);
  const observerRef = useRef(null);

  const loadMoreEvents = useCallback(async () => {
    if (loading || !hasNextPage) return;
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const newData = await getEventsPage(nextPage, 10);
      setAllEvents((prev: Event[]) => [...prev, ...newData.results]);
      setCurrentPage(newData.currentPage);
      setHasNextPage(newData.hasNextPage);
    } catch (error) {
      console.error('Error loading more events:', error);
    } finally {
      setLoading(false);
    }
  }, [currentPage, hasNextPage, loading]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreEvents();
        }
      },
      { threshold: 0.1 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => observer.disconnect();
  }, [loadMoreEvents]);

  return (
    <>
      <title>Upcoming Events</title>
      <div className='flex flex-col md:flex-row justify-between gap-5'>
        <div className='w-full md:w-2/5 p-4 overflow-y-auto'>
          <h1 className='text-2xl font-bold p-4'>Upcoming Events</h1>
          <div className='grid grid-cols-2 gap-4'>
            <EventsList events={allEvents} setHighlightedEvent={setHighlightedEvent} />
            <div ref={observerRef} className='h-4'>
              {loading && (
                <div className='flex justify-center items-center p-4'>
                  <div className='loading loading-spinner loading-md'></div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='md:w-3/5 h-[800px] rounded-2xl overflow-hidden sticky top-20'>
          <MapContainer zoom={13} className='h-full '>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <MapBounds events={allEvents} />
            <PanOnHover event={highlightedEvent} />
            <EventsMarkers events={allEvents} />
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Events;
