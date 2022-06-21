import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcvDD3D6CCWImra5kja2MlUbc6vvp2k8E",
  authDomain: "litehome-store.firebaseapp.com",
  projectId: "litehome-store",
  storageBucket: "litehome-store.appspot.com",
  messagingSenderId: "1087637456589",
  appId: "1:1087637456589:web:7d3b4c7d720bb71bd74b84"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)