import { initializeApp } from 'firebase/app';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAb7kUtJLnzBrQuaprstQ8grNv43MHNHgw",
  authDomain: "my-task-manager-c7ebc.firebaseapp.com",
  projectId: "my-task-manager-c7ebc",
  storageBucket: "my-task-manager-c7ebc.appspot.com",
  messagingSenderId: "480504546096",
  appId: "1:480504546096:web:1a2315bc719f8dfaa47ef5"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  if(userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('Error creating new user', error);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async ( email, password ) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
