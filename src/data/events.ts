const API_URL = import.meta.env.VITE_EVENTS_API_URL;

export const getAllEvents = async () => {
  const res = await fetch(`${API_URL}/events`);
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
};
