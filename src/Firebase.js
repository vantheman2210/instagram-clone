// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmsFqugOyXlDk1UvtyOKVDEOeQIDDaN-w",
  authDomain: "insta-clone-8ccdd.firebaseapp.com",
  projectId: "insta-clone-8ccdd",
  storageBucket: "insta-clone-8ccdd.appspot.com",
  messagingSenderId: "349845240409",
  appId: "1:349845240409:web:09d511c6186ddaea050f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {db, provider, auth};

