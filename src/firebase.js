import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAykowCSRnioBlw0jm8FGcKDgRkgr6XiRA",
  authDomain: "chat-5881c.firebaseapp.com",
  projectId: "chat-5881c",
  storageBucket: "chat-5881c.appspot.com",
  messagingSenderId: "787349384415",
  appId: "1:787349384415:web:5e2fac5d97ae2511eb8d6a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();