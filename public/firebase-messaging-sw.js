// import firebase from "./firebase";

// import firebase from "./firebase";

importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: "915224610897",

})
const initMessaging=firebase.messaging()
