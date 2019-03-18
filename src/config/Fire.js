import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB4eCe5TzFxHoC-naNn6ytjr6s7VM0Ssgc",
    authDomain: "react-firebase-app-fc5c1.firebaseapp.com",
    databaseURL: "https://react-firebase-app-fc5c1.firebaseio.com",
    projectId: "react-firebase-app-fc5c1",
    storageBucket: "react-firebase-app-fc5c1.appspot.com",
    messagingSenderId: "988800064190"
};
const fire = firebase.initializeApp(config);

export default fire;
