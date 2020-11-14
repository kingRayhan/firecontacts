import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBGc4rk9kavNhiyyO3y8BfZfPaBDnogQSc",
  authDomain: "firecontacts-b29e1.firebaseapp.com",
  databaseURL: "https://firecontacts-b29e1.firebaseio.com",
  projectId: "firecontacts-b29e1",
  storageBucket: "firecontacts-b29e1.appspot.com",
  messagingSenderId: "792701271286",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export default firebase.firestore();
