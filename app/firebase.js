import { getFirestore } from 'firebase/firestore';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT2jaqQtqIdEUUG-hprYxQV6LtS_c7eh8",
  authDomain: "nextjs-8fd6b.firebaseapp.com",
  projectId: "nextjs-8fd6b",
  storageBucket: "nextjs-8fd6b.appspot.com",
  messagingSenderId: "303468439877",
  appId: "1:303468439877:web:05768559e58970ee13f62c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};
