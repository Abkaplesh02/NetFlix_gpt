// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1XtOUHXebNhtuORbTSc0NXMwkMM_zEZ8",
  authDomain: "netflixgpt-b933f.firebaseapp.com",
  projectId: "netflixgpt-b933f",
  storageBucket: "netflixgpt-b933f.firebasestorage.app",
  messagingSenderId: "423197047556",
  appId: "1:423197047556:web:3b7a3a71be4091f595ee51",
  measurementId: "G-YDCJZQXSW2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();