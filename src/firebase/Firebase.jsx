// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "weather-app-96075.firebaseapp.com",
  projectId: "weather-app-96075",
  storageBucket: "weather-app-96075.firebasestorage.app",
  messagingSenderId: "965256412718",
  appId: "1:965256412718:web:2227c46e4f33c43c2729bf",
  measurementId: "G-8P9XQT32C7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth};