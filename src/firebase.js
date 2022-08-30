import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyCobdl0wwyzII-Z4K-uSZJA_rsmnt-5r20",
	authDomain: "chat-app-yt-8c968.firebaseapp.com",
	projectId: "chat-app-yt-8c968",
	storageBucket: "chat-app-yt-8c968.appspot.com",
	messagingSenderId: "424342884284",
	appId: "1:424342884284:web:f8b9c223074c20cf4025b9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);