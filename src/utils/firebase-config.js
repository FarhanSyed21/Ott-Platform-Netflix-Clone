// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBChrY2GJ0R-hM-3dxuREIuZnHEUeQnj6Q",
  authDomain: "netflix-clone-823fd.firebaseapp.com",
  projectId: "netflix-clone-823fd",
  storageBucket: "netflix-clone-823fd.appspot.com",
  messagingSenderId: "1068423785134",
  appId: "1:1068423785134:web:f76b8e54facdb2668e5b3f",
  measurementId: "G-PT0WWFNS6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
