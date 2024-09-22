// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import{getAuth} from "firebase/auth"
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxsjaz3djn8c9BmlqIyjI1VIfqI4eQYWM",
  authDomain: "clone-872d5.firebaseapp.com",
  projectId: "clone-872d5",
  storageBucket: "clone-872d5.appspot.com",
  messagingSenderId: "825028794916",
  appId: "1:825028794916:web:a27901d0bfd9da5dae56b1"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore