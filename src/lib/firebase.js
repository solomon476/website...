import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqfKyzE7fNk4tSANUqlgvX8vfjLI1wwsI",
  authDomain: "solian-wolves-5ae61.firebaseapp.com",
  projectId: "solian-wolves-5ae61",
  storageBucket: "solian-wolves-5ae61.firebasestorage.app",
  messagingSenderId: "631343743456",
  appId: "1:631343743456:web:daccd2f24a18c1ade3ab85",
  measurementId: "G-V4CLM26DJB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
