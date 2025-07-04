const API_URL = import.meta.env.VITE_EVENTS_API_URL;

export const getAllEvents = async ({ request }) => {
  const url = new URL(request.url);
  const page = url.searchParams.get('page') || '1';
  const limit = url.searchParams.get('limit') || '10';

  const res = await fetch(`${API_URL}/events?page=${page}&limit=${limit}`);
  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }
  return res.json();
};
