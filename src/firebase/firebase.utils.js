import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBipZyJ0HirZ2-G4hxRt0ETZATIPaM-sVg",
    authDomain: "ecomm-3ae0f.firebaseapp.com",
    projectId: "ecomm-3ae0f",
    storageBucket: "ecomm-3ae0f.appspot.com",
    messagingSenderId: "745507612352",
    appId: "1:745507612352:web:36b16c00faffaf52826f25",
    measurementId: "G-VRH2M3EXSF"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;