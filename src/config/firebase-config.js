// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC47KoW87Y553PRwGdpSgIhtF68Hd-dI4M",
  authDomain: "expense-track-93b07.firebaseapp.com",
  projectId: "expense-track-93b07",
  storageBucket: "expense-track-93b07.appspot.com",
  messagingSenderId: "198716434532",
  appId: "1:198716434532:web:ff55b74999dcfd9454d771",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
