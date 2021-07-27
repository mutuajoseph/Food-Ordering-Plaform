import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYiktDWJpW1VvjuD1X_aQq93WXhGSzZvM",
  authDomain: "kune-assess.firebaseapp.com",
  projectId: "kune-assess",
  storageBucket: "kune-assess.appspot.com",
  messagingSenderId: "554870729417",
  appId: "1:554870729417:web:05e6299dab63149b98bb18",
  measurementId: "G-0ZYNLZGHSY",
};

// initialize firebase app

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
