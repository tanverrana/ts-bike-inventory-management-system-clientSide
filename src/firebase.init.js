// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDhKJjEv2wWCSuWn5Wzqi6PfzqUcMrYTbE",
    authDomain: "ts-bike-inventory-management.firebaseapp.com",
    projectId: "ts-bike-inventory-management",
    storageBucket: "ts-bike-inventory-management.appspot.com",
    messagingSenderId: "406076178243",
    appId: "1:406076178243:web:a9c84f6068a1c4ed3239f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;