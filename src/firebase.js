import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database'

export const config = {
  apiKey: "AIzaSyCxXb_J7C2WbAXTsUxlodrdWnsZ9KX4-D0",
    authDomain: "h2h-consulting.firebaseapp.com",
    databaseURL: "https://h2h-consulting.firebaseio.com",
    projectId: "h2h-consulting",
    storageBucket: "h2h-consulting.appspot.com",
    messagingSenderId: "589299719897"
};



  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }

  const database = firebase.database();
  const auth = firebase.auth();
  export const provider = new firebase.auth.FacebookAuthProvider();


  export default firebase
