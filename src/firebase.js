// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDgzQV5T2UB1hHiAwuhdfAf4nShh8QIrI0",
  authDomain: "slack-clone-6dfbd.firebaseapp.com",
  projectId: "slack-clone-6dfbd",
  storageBucket: "slack-clone-6dfbd.appspot.com",
  messagingSenderId: "401885098687",
  appId: "1:401885098687:web:f78193e94e1b1402888c0a",
  measurementId: "G-PR6Y57ZF70",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
