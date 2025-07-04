import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapBounds, PanOnHover } from '@/components';
import 'leaflet/dist/leaflet.css';

const Home = () => {
  const data = useLoaderData();
  const [highlightedEvent, setHighlightedEvent] = useState(null);

  return (
    <>
      <title>Upcoming Events</title>
      <div className='flex flex-col md:flex-row justify-between gap-5'>
        <div className='w-full md:w-2/5 p-4 overflow-y-auto'>
          <h1 className='text-2xl font-bold p-4'>Upcoming Events</h1>
          <div className='grid grid-cols-2 gap-4'>
            {data.results.map((event) => (
              <div
                key={event.id}
                className='card bg-base-100 shadow-xl cursor-pointer'
                onMouseEnter={() => setHighlightedEvent(event)}
              >
                <div className='card-body'>
                  <h2 className='card-title'>{event.title}</h2>
                  <p>{event.description}</p>
                  <p>
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='md:w-3/5 h-[800px] rounded-2xl overflow-hidden sticky top-20'>
          <MapContainer zoom={13} className='h-full '>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <MapBounds events={data.results} />
            <PanOnHover event={highlightedEvent} />
            {data.results.map((event) => (
              <Marker key={event.id} position={[event.latitude, event.longitude]}>
                <Popup>
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <p>
                    <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </>
  );
};

export default Home;
