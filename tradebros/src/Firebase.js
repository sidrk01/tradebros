// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy3LFuH7eyiaWSTzcJYwbuTFwxseFesvE",
  authDomain: "tradebros-d6748.firebaseapp.com",
  projectId: "tradebros-d6748",
  storageBucket: "tradebros-d6748.appspot.com",
  messagingSenderId: "1047912918736",
  appId: "1:1047912918736:web:b65b5c9d16ca1db3cff8d5",
  measurementId: "G-B4PGKPVVSM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}