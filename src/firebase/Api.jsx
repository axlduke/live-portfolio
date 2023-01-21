// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import  { getFirestore } from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCus8K9yQPjes1C791VQqZqS-_MVOp7acQ",
    authDomain: "portfolio-6f1eb.firebaseapp.com",
    projectId: "portfolio-6f1eb",
    storageBucket: "portfolio-6f1eb.appspot.com",
    messagingSenderId: "972985825246",
    appId: "1:972985825246:web:b9b8c017dea28bcb6ccf4f"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)
export const storage = getStorage(app) 