import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA1uJDbA6ultccD7rnfrulElGqzoM1s_Pg",
    authDomain: "todo-app-1998.firebaseapp.com",
    projectId: "todo-app-1998",
    storageBucket: "todo-app-1998.appspot.com",
    messagingSenderId: "857131740770",
    appId: "1:857131740770:web:796abc85fe662649c0eb3b",
    measurementId: "G-7S0VZ7GMY1"

});

const db = firebaseApp.firestore();

export default db;