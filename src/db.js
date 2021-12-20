import firebase from "firebase/app";
import "firebase/database";


const config = {
    apiKey: "AIzaSyAxbUyLnAWmBjtWdAH0h09jpHXOyPOw9y0",
    authDomain: "firevuechat-f6918.firebaseapp.com",
    projectId: "firevuechat-f6918",
    storageBucket: "firevuechat-f6918.appspot.com",
    messagingSenderId: "38393542298",
    appId: "1:38393542298:web:8eda251205dde2098dd123"
}

const db = firebase.initializeApp(config);
export default db;