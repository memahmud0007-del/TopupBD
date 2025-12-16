import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD7u4F6eVm9K1tSSoDgFx2jliyFfLNSpII",
  authDomain: "topup-5c15c.firebaseapp.com",
  projectId: "topup-5c15c",
  storageBucket: "topup-5c15c.firebasestorage.app",
  messagingSenderId: "765573983722",
  appId: "1:765573983722:web:f4d56060be053860191693",
  measurementId: "G-Q6J2CD7F0H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);