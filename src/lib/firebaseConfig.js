import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
    apiKey: "AIzaSyBhKeFPoDFIgoQiL5Zu_tGjWsdFYsgsFi8",
    authDomain: "comansys-d5b37.firebaseapp.com",
    databaseURL: "https://comansys-d5b37-default-rtdb.firebaseio.com",
    projectId: "comansys-d5b37",
    storageBucket: "comansys-d5b37.appspot.com",
    messagingSenderId: "1094845932081",
    appId: "1:1094845932081:web:39e294f57af449b26deb10",
    measurementId: "G-N3L3CGR1G0"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
