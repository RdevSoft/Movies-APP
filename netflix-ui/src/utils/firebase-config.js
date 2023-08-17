import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAwEkMxMc02Weaah6yjTov7ZvE4_0Xx3bA",
    authDomain: "react-netflix-clone-639b2.firebaseapp.com",
    projectId: "react-netflix-clone-639b2",
    storageBucket: "react-netflix-clone-639b2.appspot.com",
    messagingSenderId: "1055945219036",
    appId: "1:1055945219036:web:f3f6cbd4b3957a50188d19",
    measurementId: "G-00941DEV15"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
