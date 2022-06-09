// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjphEsIr17talFKWgmZAVz29ChdQLY-ss",
    authDomain: "house-marketplace-app-g1n0.firebaseapp.com",
    projectId: "house-marketplace-app-g1n0",
    storageBucket: "house-marketplace-app-g1n0.appspot.com",
    messagingSenderId: "621035648574",
    appId: "1:621035648574:web:abbc877e156ab23a80c36f"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()