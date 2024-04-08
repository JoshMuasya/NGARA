import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
require('dotenv').config();

const firebaseConfig = {
    apiKey: "AIzaSyBKRwg7kOMoW0uNBmjA6OVU7KHk50a5sFY",
    authDomain: "ngara-5a4b1.firebaseapp.com",
    projectId: "ngara-5a4b1",
    storageBucket: "ngara-5a4b1.appspot.com",
    messagingSenderId: "790595309603",
    appId: "1:790595309603:web:362c8d74a35764cfdce196"
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app)
const auth = getAuth(app)

export { db, storage, auth }