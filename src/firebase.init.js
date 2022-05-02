// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

// apiKey: "AIzaSyCqOyjT9xYz1uea_65MbF_uYNVxdyjOLug",
// authDomain: "assignment-service-7e7f4.firebaseapp.com",
// projectId: "assignment-service-7e7f4",
// storageBucket: "assignment-service-7e7f4.appspot.com",
// messagingSenderId: "702328563936",
// appId: "1:702328563936:web:27c878d18b0e4f92c18885"