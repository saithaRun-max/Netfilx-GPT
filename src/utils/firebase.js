// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_BBvxC_0EboO_PNecmDTokbGRchIoFzU",
  authDomain: "netfilxgpt-001.firebaseapp.com",
  projectId: "netfilxgpt-001",
  storageBucket: "netfilxgpt-001.appspot.com",
  messagingSenderId: "721399260427",
  appId: "1:721399260427:web:a512fcf27cc720d16a6e0e",
  measurementId: "G-9VPT9KLEHF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();