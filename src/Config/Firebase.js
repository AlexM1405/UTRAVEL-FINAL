// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCm94eOY3V8HqA8L6yDNl2Z2Iz8G0I0g-k",
  authDomain: "utravel-1c20a.firebaseapp.com",
  projectId: "utravel-1c20a",
  storageBucket: "utravel-1c20a.appspot.com",
  messagingSenderId: "239438006628",
  appId: "1:239438006628:web:fdbe59565fdbb64ede9271",
  measurementId: "G-Z832LCF7KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);