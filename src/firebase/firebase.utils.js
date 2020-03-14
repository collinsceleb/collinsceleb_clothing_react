import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBGxhwpQYbyoLd8MutYN5732csSK5kC0b0",
    authDomain: "collinsceleb-clothing.firebaseapp.com",
    databaseURL: "https://collinsceleb-clothing.firebaseio.com",
    projectId: "collinsceleb-clothing",
    storageBucket: "collinsceleb-clothing.appspot.com",
    messagingSenderId: "137281764749",
    appId: "1:137281764749:web:b905a5e61c7de07bbe91c4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;