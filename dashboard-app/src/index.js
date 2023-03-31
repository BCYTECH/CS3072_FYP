import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {initializeApp} from 'firebase/app';
//import {getDatabase} from 'firebase/database'
import {getFirestore} from 'firebase/firestore'
//import reportWebVitals from './reportWebVitals';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb0BmU297csv6u3V8Ygshg4N927ibULSo",
  authDomain: "email-test-f0692.firebaseapp.com",
  projectId: "email-test-f0692",
  storageBucket: "email-test-f0692.appspot.com",
  messagingSenderId: "16505624735",
  appId: "1:16505624735:web:edf55cac0f7dc65882eaaa",
  measurementId: "G-0VC5KE6Q1T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
