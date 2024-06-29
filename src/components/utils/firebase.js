// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfa6biQhbYpdDcRFWysPYF_7R4Dv9i1mg",
  authDomain: "netflixgpt-5d96b.firebaseapp.com",
  projectId: "netflixgpt-5d96b",
  storageBucket: "netflixgpt-5d96b.appspot.com",
  messagingSenderId: "383417551121",
  appId: "1:383417551121:web:7fbee1fd0b242b55c4e4b0",
  measurementId: "G-Y4QHXEJ92E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
  