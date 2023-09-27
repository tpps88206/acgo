import { child, getDatabase, push, ref, serverTimestamp, update } from 'firebase/database';

export const addEvent = (projectID, title, cost) => {
  const dbRef = ref(getDatabase());

  const newEventKey = push(child(dbRef, `projects/${projectID}/events`)).key;

  const updatePayload = {};
  updatePayload[`projects/${projectID}/events/${newEventKey}`] = {
    title,
    cost,
    createdAt: serverTimestamp(),
  };

  return update(dbRef, updatePayload);
};
