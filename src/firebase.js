import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyCecg7b_0f-4I8k4UQemk39acoOmM8hQqg',
  authDomain: 'peer-prank.firebaseapp.com',
  databaseURL: 'https://peer-prank.firebaseio.com',
  projectId: 'peer-prank',
  storageBucket: 'peer-prank.appspot.com',
  messagingSenderId: '77728834119',
  appId: '1:77728834119:web:cfb5dc963af7969e408762',
});

export const firestore = firebase.firestore();
export const storage = firebase.storage();
