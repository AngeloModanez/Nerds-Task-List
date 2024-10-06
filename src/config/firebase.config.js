import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCe0wxDZ-_gdmbi5Vqfr_0XBVlX0V4-L4s",
    authDomain: "task-list-2f466.firebaseapp.com",
    projectId: "task-list-2f466",
    storageBucket: "task-list-2f466.appspot.com",
    messagingSenderId: "942520167847",
    appId: "1:942520167847:web:17255086151afc7456da82"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);