import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCJUzS6FvKhYnQhZlPt8ryyrZ-eEbrgKTw",
  authDomain: "sourav-shop.firebaseapp.com",
  projectId: "sourav-shop",
  storageBucket: "sourav-shop.appspot.com",
  messagingSenderId: "177862865109",
  appId: "1:177862865109:web:89d09fe733b2515484b25c",
  measurementId: "G-QT9QR69W6Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};




