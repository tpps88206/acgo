import { child, get, getDatabase, push, ref, serverTimestamp, update } from 'firebase/database';
import map from 'lodash/map';

export const addMember = (projectID, name, role) => {
  const dbRef = ref(getDatabase());

  const newEventKey = push(child(dbRef, `projects/${projectID}/members`)).key;

  const updatePayload = {};
  updatePayload[`projects/${projectID}/members/${newEventKey}`] = {
    name,
    role,
    createdAt: serverTimestamp(),
  };

  return update(dbRef, updatePayload);
};

export const getMembers = projectID => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `projects/${projectID}/members`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return {};
      }
    })
    .then(value => {
      return map(value, (v, index) => {
        return {
          ...v,
          id: index,
        };
      });
    })
    .catch(error => {
      console.error(error);
    });
};
