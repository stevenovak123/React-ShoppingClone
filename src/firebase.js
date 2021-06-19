import firebase from 'firebase'

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyCeIvliA8y9K952K074WxKP_mEVqPmQ4YU",
  authDomain: "shopping-clone-f3caf.firebaseapp.com",
  projectId: "shopping-clone-f3caf",
  storageBucket: "shopping-clone-f3caf.appspot.com",
  messagingSenderId: "847631621535",
  appId: "1:847631621535:web:5fd9b02a7035d483b531aa"
});

const db = firebase.firestore();
export { db }
