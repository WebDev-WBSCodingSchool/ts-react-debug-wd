import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import L from 'leaflet';

const PanOnHover = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    if (location) {
      const padding = 0.01;
      const [lat, lng] = location;
      map.panTo([lat, lng]);
      const bounds = L.latLngBounds([lat - padding, lng - padding], [lat + padding, lng + padding]);
      map.flyToBounds(bounds, {
        padding: [20, 20],
        maxZoom: 16,
        animate: true
      });
    }
  }, [map, location]);

  return null;
};
export default PanOnHover;
