import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAxS4HOZkDOguqsB1Lzy-oQiWQPAJdG2Eo",
  authDomain: "crud-fire-react-f0d85.firebaseapp.com",
  projectId: "crud-fire-react-f0d85",
  storageBucket: "crud-fire-react-f0d85.appspot.com",
  messagingSenderId: "237762974321",
  appId: "1:237762974321:web:21f3a5b5a663476fc601d0"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)