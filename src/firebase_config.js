import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyBYXEINpzLtnFzXBgBClRgQea8UJ6oo_qc",
    authDomain: "todoapp-8baab.firebaseapp.com",
    projectId: "todoapp-8baab",
    storageBucket: "todoapp-8baab.appspot.com",
    messagingSenderId: "618862114544",
    appId: "1:618862114544:web:fa2ca42a63496fcc007435"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export { db };