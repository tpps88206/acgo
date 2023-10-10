import { child, get, getDatabase, ref } from 'firebase/database';

export const getPorject = projectID => {
  const dbRef = ref(getDatabase());

  return get(child(dbRef, `projects/${projectID}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return {};
      }
    })
    .catch(error => {
      console.error(error);
    });
};
