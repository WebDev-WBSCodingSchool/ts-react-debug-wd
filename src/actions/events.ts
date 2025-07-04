const API_URL = import.meta.env.VITE_EVENTS_API_URL;

export const createEventAction = async ({ request }) => {
  const formData = await request.formData();
  return fetch(`${API_URL}/events`, {
    method: 'POST',
    body: JSON.stringify(Object.fromEntries(formData)),
    headers: {
      'Content-Type': 'application/json'
    }
  });
};
