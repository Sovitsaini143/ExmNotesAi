
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "authexamnotes-ea9e7.firebaseapp.com",
  projectId: "authexamnotes-ea9e7",
  storageBucket: "authexamnotes-ea9e7.firebasestorage.app",
  messagingSenderId: "764547989034",
  appId: "1:764547989034:web:32c6c1088ac432be0a0d53"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth, provider}