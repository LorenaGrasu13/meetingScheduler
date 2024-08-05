// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "internship-32409.firebaseapp.com",
  projectId: "internship-32409",
  storageBucket: "internship-32409.appspot.com",
  messagingSenderId: "1097145047188",
  appId: "1:1097145047188:web:cc9469b6e74ab9a902bc81",
  measurementId: "G-24JBRZN2SK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);