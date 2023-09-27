import { child, get, getDatabase, push, ref, serverTimestamp, update } from 'firebase/database';

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

export const getEvents = projectID => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `projects/${projectID}/events`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch(error => {
      console.error(error);
    });
};
