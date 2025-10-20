// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJaWWIqEJO0YgW5wUKK4gJ9V8xWOSI79k",
  authDomain: "papa-laundry.firebaseapp.com",
  projectId: "papa-laundry",
  storageBucket: "papa-laundry.firebasestorage.app",
  messagingSenderId: "410901225627",
  appId: "1:410901225627:web:0e2f70a7c71d48fae4e63e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app