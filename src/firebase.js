// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDj8E5IiFunO-B4rf4GIs9nHuZ1ga6ElWc",
  authDomain: "netflix-clone-4cf7d.firebaseapp.com",
  projectId: "netflix-clone-4cf7d",
  storageBucket: "netflix-clone-4cf7d.appspot.com",
  messagingSenderId: "1016200696663",
  appId: "1:1016200696663:web:794a7342a8f2f9d61f2412",
  measurementId: "G-X07564ZCB5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);