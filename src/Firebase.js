// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmsFqugOyXlDk1UvtyOKVDEOeQIDDaN-w",
  authDomain: "insta-clone-8ccdd.firebaseapp.com",
  projectId: "insta-clone-8ccdd",
  storageBucket:"gs://insta-clone-8ccdd.appspot.com",
  messagingSenderId: "349845240409",
  appId: "1:349845240409:web:09d511c6186ddaea050f48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const storage = getStorage(app);
export const user = auth.currentUser;



