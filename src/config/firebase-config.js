// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsPtrjM1RcjsVWC-Ucsczt_PnJHRxdBvs",
  authDomain: "expensetracker-ccaaa.firebaseapp.com",
  projectId: "expensetracker-ccaaa",
  storageBucket: "expensetracker-ccaaa.appspot.com",
  messagingSenderId: "985733512441",
  appId: "1:985733512441:web:d9e29024fc41038e62b628",
  measurementId: "G-LV586KXLNK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const Gprovider = new GoogleAuthProvider()
export const db = getFirestore(app)