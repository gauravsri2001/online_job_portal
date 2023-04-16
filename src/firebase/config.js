// import app from 'firebase/app'
// import 'firebase/firestore'
// const firebaseConfig = {
//     apiKey: "AIzaSyCu8TYXnGMvhURMtsLKtUb4iauLeMpWPXA",
//     authDomain: "job-listing-d3498.firebaseapp.com",
//     projectId: "job-listing-d3498",
//     storageBucket: "job-listing-d3498.appspot.com",
//     messagingSenderId: "411437502866",
//     appId: "1:411437502866:web:11bb0a88c21659cbe5714b"
//   };
//   //Initialize firebase
//   const firebase = app.initializeApp(firebaseConfig);
// const firestore = firebase.firestore();

// export { firebase };
// export { firestore };
// //export { app };


import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Your project's configuration object goes here
  apiKey: "AIzaSyCu8TYXnGMvhURMtsLKtUb4iauLeMpWPXA",
  authDomain: "job-listing-d3498.firebaseapp.com",
  projectId: "job-listing-d3498",
  storageBucket: "job-listing-d3498.appspot.com",
  messagingSenderId: "411437502866",
  appId: "1:411437502866:web:11bb0a88c21659cbe5714b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a Firestore instance
export const firestore = getFirestore(app);