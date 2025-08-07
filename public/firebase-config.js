// === firebase-config.js ===
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import {
  getFirestore
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCx00DmHMLmiDbfFUiBN3w5ueIxAzLqWus",
  authDomain: "chitchat-254bc.firebaseapp.com",
  projectId: "chitchat-254bc",
  storageBucket: "chitchat-254bc.appspot.com",
  messagingSenderId: "7406729436",
  appId: "1:7406729436:web:4ceec3453f658398215c19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };