// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhKeFPoDFIgoQiL5Zu_tGjWsdFYsgsFi8",
  authDomain: "comansys-d5b37.firebaseapp.com",
  databaseURL: "https://comansys-d5b37-default-rtdb.firebaseio.com",
  projectId: "comansys-d5b37",
  storageBucket: "comansys-d5b37.appspot.com",
  messagingSenderId: "1094845932081",
  appId: "1:1094845932081:web:39e294f57af449b26deb10",
  measurementId: "G-N3L3CGR1G0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);