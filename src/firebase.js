import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCuYxVnKFsjhe3T-tAK-ebi4ijr5Utzwmg",
    authDomain: "instagram-clone-d2749.firebaseapp.com",
    databaseURL: "https://instagram-clone-d2749.firebaseio.com",
    projectId: "instagram-clone-d2749",
    storageBucket: "instagram-clone-d2749.appspot.com",
    messagingSenderId: "982150010198",
    appId: "1:982150010198:web:c44a6c12a0f9a7602df2f7"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };