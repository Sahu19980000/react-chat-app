import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8LXIn9jR6EiTHAhd3jtFEiDVXhAa4vds",
  authDomain: "react-chat-app-4f77b.firebaseapp.com",
  databaseURL: "https://react-chat-app-4f77b-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-4f77b",
  storageBucket: "react-chat-app-4f77b.appspot.com",
  messagingSenderId: "882858358127",
  appId: "1:882858358127:web:ed7bc75ddb56ef7986249a",
  measurementId: "G-7JTVKHHFTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
