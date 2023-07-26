
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDdLt-vPw8N2VNPnh6k2mKV51BQTCL-dfI",
  authDomain: "react-netflix-clone-3957c.firebaseapp.com",
  projectId: "react-netflix-clone-3957c",
  storageBucket: "react-netflix-clone-3957c.appspot.com",
  messagingSenderId: "696018010342",
  appId: "1:696018010342:web:4def86fd127d30ded97b27",
  measurementId: "G-0T9YNEDNDR"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);