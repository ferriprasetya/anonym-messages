import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIwFxra3u5RILvlbZLXTy9CrLbT6CZM_w",
  authDomain: "anonym-message.firebaseapp.com",
  databaseURL: "https://anonym-message-default-rtdb.firebaseio.com",
  projectId: "anonym-message",
  storageBucket: "anonym-message.appspot.com",
  messagingSenderId: "1079644824402",
  appId: "1:1079644824402:web:f70a4454a025b889ff108b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init firebase
initializeApp(firebaseConfig)

// init firestore service
const database = getFirestore()


export default database
