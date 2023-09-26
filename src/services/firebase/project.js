import { child, get, getDatabase, ref } from 'firebase/database';

const dbRef = ref(getDatabase());

export const getProjects = projectID =>
  get(child(dbRef, `projects/${projectID}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log('No data available');
      }
    })
    .catch(error => {
      console.error(error);
    });
