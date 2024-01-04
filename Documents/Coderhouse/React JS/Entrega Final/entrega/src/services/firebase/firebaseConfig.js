import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9jTs9gBN2wNSM5Rx6KmI6VaD1Me1nRhk",
  authDomain: "productos-9429b.firebaseapp.com",
  projectId: "productos-9429b",
  storageBucket: "productos-9429b.appspot.com",
  messagingSenderId: "970368486599",
  appId: "1:970368486599:web:f6a80bed2d79078d2682e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app) 