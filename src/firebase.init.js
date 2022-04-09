// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfvYbAZ0QYzgZy1_ENB1W_U-8WXxMNDOs",
  authDomain: "ema-jhon-9af0c.firebaseapp.com",
  projectId: "ema-jhon-9af0c",
  storageBucket: "ema-jhon-9af0c.appspot.com",
  messagingSenderId: "435400178470",
  appId: "1:435400178470:web:38aea14abd16bbe0b31fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;