// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import{getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4rGNqs0hZ4NW9n5zvtwjoClKm9kAfO7I",
  authDomain: "react-firebase-auth-abe6a.firebaseapp.com",
  projectId: "react-firebase-auth-abe6a",
  storageBucket: "react-firebase-auth-abe6a.appspot.com",
  messagingSenderId: "415002639763",
  appId: "1:415002639763:web:4a6bc4553661c3be6d3c66",
  measurementId: "G-S4L9EQH89X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
// const analytics = getAnalytics(app);