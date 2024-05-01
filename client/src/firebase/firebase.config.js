// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByE5wKPuEcjUgU09z1xZh1BKaQS42zhd4",
  authDomain: "mern-book-inventory-d82a6.firebaseapp.com",
  projectId: "mern-book-inventory-d82a6",
  storageBucket: "mern-book-inventory-d82a6.appspot.com",
  messagingSenderId: "886268898124",
  appId: "1:886268898124:web:49ed91875c331a17c07de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;