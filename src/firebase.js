// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-48403.firebaseapp.com",
  projectId: "mern-blog-48403",
  storageBucket: "mern-blog-48403.appspot.com",
  messagingSenderId: "1036741095303",
  appId: "1:1036741095303:web:94f15580906eccdef1ed22",
  measurementId: "G-0H7BZZCJJS"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);