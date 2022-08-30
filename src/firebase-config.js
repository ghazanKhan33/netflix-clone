import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlrocpY9bZDCgHbvDNCl1e6Dx-A83jqeo",
  authDomain: "netflix-react-c97d4.firebaseapp.com",
  projectId: "netflix-react-c97d4",
  storageBucket: "netflix-react-c97d4.appspot.com",
  messagingSenderId: "260824440658",
  appId: "1:260824440658:web:36d73080e383119bf0248b",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
