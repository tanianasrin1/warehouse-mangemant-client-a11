// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqOyjT9xYz1uea_65MbF_uYNVxdyjOLug",
  authDomain: "assignment-service-7e7f4.firebaseapp.com",
  projectId: "assignment-service-7e7f4",
  storageBucket: "assignment-service-7e7f4.appspot.com",
  messagingSenderId: "702328563936",
  appId: "1:702328563936:web:27c878d18b0e4f92c18885"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;