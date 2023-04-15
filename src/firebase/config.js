import app from 'firebase/app'
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCu8TYXnGMvhURMtsLKtUb4iauLeMpWPXA",
    authDomain: "job-listing-d3498.firebaseapp.com",
    projectId: "job-listing-d3498",
    storageBucket: "job-listing-d3498.appspot.com",
    messagingSenderId: "411437502866",
    appId: "1:411437502866:web:11bb0a88c21659cbe5714b"
  };
  //Initialize firebase
  const firebase = app.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();
  export {firebase, firestore, app}