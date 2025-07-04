const API_URL = import.meta.env.VITE_EVENTS_API_URL;

export const getAllEvents = async (page = 1, limit = 10) => {
  const res = await fetch(`${API_URL}/events?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
};

export const getEventsPage = async (page = 1, limit = 10) => {
  const res = await fetch(`${API_URL}/events?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
};
