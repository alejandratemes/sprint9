// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiDUxeaawS3LO17A2StqhHHsCL4TeBA2k",
  authDomain: "sprint9-5b25b.firebaseapp.com",
  projectId: "sprint9-5b25b",
  storageBucket: "sprint9-5b25b.appspot.com",
  messagingSenderId: "543113241976",
  appId: "1:543113241976:web:46d80c6f780ae237e5548d",
  measurementId: "G-4K241MFT6R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);