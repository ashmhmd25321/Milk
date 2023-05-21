// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjtMBC_qlKW-SxFb4PhpTTIMBVp-TWbDM",
  authDomain: "milk-4595b.firebaseapp.com",
  projectId: "milk-4595b",
  storageBucket: "milk-4595b.appspot.com",
  messagingSenderId: "223357195656",
  appId: "1:223357195656:web:6bb62047bacce971b8163d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);