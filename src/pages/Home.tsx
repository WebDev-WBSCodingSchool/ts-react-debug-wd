import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapBounds, PanOnHover } from '@/components';

const Home = () => {
  const data = useLoaderData();
  const [panTo, setPanTo] = useState(null);

  return (
    <>
      <title>Upcoming Events</title>
      <div className='flex flex-col md:flex-row max-h-[calc(100dvh-64px-68px)]'>
        <div className='w-full md:w-1/3 p-4 bg-base-300 overflow-y-auto'>
          <h1 className='text-2xl font-bold p-4'>Upcoming Events</h1>
          <div className='grid grid-cols-1 gap-4'>
            {data.results.map((event) => (
              <div
                key={event.id}
                className='card bg-base-100 shadow-xl cursor-pointer'
                onMouseEnter={() => setPanTo([event.latitude, event.longitude])}
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
        <div className='w-full md:w-2/3'>
          <MapContainer
            center={[49.01438194665317, 8.404746955649602]}
            zoom={13}
            className='h-full'
          >
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <MapBounds events={data.results} />
            <PanOnHover location={panTo} />
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
