import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
initializeApp(firebaseConfig);

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App/>); 