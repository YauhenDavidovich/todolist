import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
} from 'firebase/firestore';
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';
import firebase from "firebase/compat";

const config = {
    apiKey: "AIzaSyApRngdoKHKGRbQS8fhUknzhofBIPrL-wE",
    authDomain: "my-todo-32ecf.firebaseapp.com",
    projectId: "my-todo-32ecf",
    storageBucket: "my-todo-32ecf.appspot.com",
    messagingSenderId: "988705314815",
    appId: "1:988705314815:web:785ca76cfa3b7ab8c479ca",
    measurementId: "G-JGWQLLEDWZ"
};

firebase.initializeApp(config);
const db = firebase.firestore();
export default db;
