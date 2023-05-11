// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFP2UP4L_sAGyL1W3ENOGXLjnDXBJRsbI",
  authDomain: "registerform-1bdd4.firebaseapp.com",
  projectId: "registerform-1bdd4",
  storageBucket: "registerform-1bdd4.appspot.com",
  messagingSenderId: "662789269347",
  appId: "1:662789269347:web:5b27b45fba6f4469059556",
  measurementId: "G-67Y41T36RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);