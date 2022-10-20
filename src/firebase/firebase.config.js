// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9NmwTh5fojyQvuDHbMJ_6WcHO9n5rNGE",
  authDomain: "auth-router-context-ce8ea.firebaseapp.com",
  projectId: "auth-router-context-ce8ea",
  storageBucket: "auth-router-context-ce8ea.appspot.com",
  messagingSenderId: "202890687616",
  appId: "1:202890687616:web:06f2364631ae6da7066265"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app