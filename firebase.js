// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgB-npNhw-e6JtQo03wB4G86ZFnnXm8cA",
  authDomain: "wps-gh.firebaseapp.com",
  projectId: "wps-gh",
  storageBucket: "wps-gh.firebasestorage.app",
  messagingSenderId: "442533477217",
  appId: "1:442533477217:web:65a408746cc2241bda2320",
  measurementId: "G-4LRS0F2BSV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
