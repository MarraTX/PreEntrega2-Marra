import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSDhUs-u2GqnKOPskw6XexumjUCW4cLUM",
  authDomain: "natural-chadi.firebaseapp.com",
  projectId: "natural-chadi",
  storageBucket: "natural-chadi.appspot.com",
  messagingSenderId: "449267103457",
  appId: "1:449267103457:web:e58c01fe957247058329a0",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
