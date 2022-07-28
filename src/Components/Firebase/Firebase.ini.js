// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxagIRD_bQDYRc56xh5cFCeYDNnpzZwow",
  authDomain: "tour-travel-687bc.firebaseapp.com",
  projectId: "tour-travel-687bc",
  storageBucket: "tour-travel-687bc.appspot.com",
  messagingSenderId: "620407230820",
  appId: "1:620407230820:web:36411dd9d2d285290a6a71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;