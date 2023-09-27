import { child, get, getDatabase, ref } from 'firebase/database';

export const getMembers = projectID => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `projects/${projectID}/members`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
    })
    .catch(error => {
      console.error(error);
    });
};
