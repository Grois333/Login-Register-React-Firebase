import firebase from 'firebase';


const config = {
    apiKey: "AIzaSyAw5EbhMghHa31HI1seSBzVzafGgyUP3ZU",
    authDomain: "react-firebase-login-register.firebaseapp.com",
    databaseURL: "https://react-firebase-login-register.firebaseio.com",
    projectId: "react-firebase-login-register",
    storageBucket: "react-firebase-login-register.appspot.com",
    messagingSenderId: "446090061136",
    appId: "1:446090061136:web:45b0ee302e3e0e99cc7855",
    measurementId: "G-JRBNHLV1NK"
  };


firebase.initializeApp(config);

export default firebase;