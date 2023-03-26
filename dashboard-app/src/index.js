import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {initializeApp} from 'firebase/app';
//import reportWebVitals from './reportWebVitals';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8AnbuKJEyYxvEo9t9blE5mqzlYX-WdPM",
  authDomain: "test-470a5.firebaseapp.com",
  databaseURL: "https://test-470a5.firebaseio.com",
  projectId: "test-470a5",
  storageBucket: "test-470a5.appspot.com",
  messagingSenderId: "818708596546",
  appId: "1:818708596546:web:48f737f284ed1693636adb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
