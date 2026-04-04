import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSjGLy2zo14XdO0prExGqCxqi1CRTtiA4",
    authDomain: "udemy-pr-222e4.firebaseapp.com",
    projectId: "udemy-pr-222e4",
    storageBucket: "udemy-pr-222e4.firebasestorage.app",
    messagingSenderId: "558605026545",
    appId: "1:558605026545:web:b0ab278d9433ca237bd550"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();