import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBMRqcfiOOFgRxgNiQW39i7JVdyx8GYioo",
    authDomain: "history-47b77.firebaseapp.com",
    databaseURL: "https://history-47b77.firebaseio.com",
    projectId: "history-47b77",
    storageBucket: "history-47b77.appspot.com",
    messagingSenderId: "403474695066",
    appId: "1:403474695066:web:671994c3bb8b5f10a8f023",
    measurementId: "G-V366CX8SPX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();