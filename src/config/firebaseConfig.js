import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBVkGenE1_Du6PcJZMWSHCVha_vrUh7va0",
  authDomain: "jlbapp.firebaseapp.com",
  projectId: "jlbapp",
  storageBucket: "jlbapp.appspot.com",
  messagingSenderId: "598025219807",
  appId: "1:598025219807:web:73a648ab35ed8bea09436a",
  measurementId: "G-2RL6CPG3GB"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();


