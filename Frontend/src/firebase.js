// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2BsQ8Gz1NNGAAodvJfYFSqxqbH5qXGaI",
  authDomain: "uploadimage-9c55e.firebaseapp.com",
  projectId: "uploadimage-9c55e",
  storageBucket: "uploadimage-9c55e.appspot.com",
  messagingSenderId: "838195918056",
  appId: "1:838195918056:web:f2695bb21ae32e9503c55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
