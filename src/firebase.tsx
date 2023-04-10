import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB5Sp9URG2mWQYftUO1I3MMtznGOkK7Bd0",
  authDomain: "kinopoisk-ff144.firebaseapp.com",
  projectId: "kinopoisk-ff144",
  storageBucket: "kinopoisk-ff144.appspot.com",
  messagingSenderId: "521481412681",
  appId: "1:521481412681:web:51de3ee34c9013a3f89f98"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()