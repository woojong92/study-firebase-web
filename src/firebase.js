// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnBF98NJDVQ5nKZc16cUGJAW5PV3qBXQg",
  authDomain: "study-firebase-web.firebaseapp.com",
  projectId: "study-firebase-web",
  storageBucket: "study-firebase-web.appspot.com",
  messagingSenderId: "161658785411",
  appId: "1:161658785411:web:756d80621f28d06a0615b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // for 인증
export const storage = getStorage(app); // for 스토리지
export const db = getFirestore(app); // for 데이터베이스
