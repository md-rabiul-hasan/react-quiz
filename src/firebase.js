// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1UU7X7Ju7lZVKvFgDHkzEM7EpFruy9Ag",
  authDomain: "nub-quiz.firebaseapp.com",
  projectId: "nub-quiz",
  storageBucket: "nub-quiz.appspot.com",
  messagingSenderId: "441378081567",
  appId: "1:441378081567:web:1f3767883a14f49dfebe2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
