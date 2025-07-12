// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjp5rmbEEh7xc_GaUJp34iBcyKvy_jX3I",
  authDomain: "quora-2-0.firebaseapp.com",
  projectId: "quora-2-0",
  storageBucket: "quora-2-0.appspot.com",
  messagingSenderId: "846034451225",
  appId: "1:846034451225:web:856defc9de9a2b1769e388",
  measurementId: "G-YVR1JKVSNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };