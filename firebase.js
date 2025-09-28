// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWNO8L3gJdINl157QeI992ntyeDQpRwcY",
  authDomain: "repository-5bb9d.firebaseapp.com",
  projectId: "repository-5bb9d",
  storageBucket: "repository-5bb9d.firebasestorage.app",
  messagingSenderId: "297124331143",
  appId: "1:297124331143:web:f8e0d552ca039d28edc222",
  measurementId: "G-F0DC2KWX21"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
