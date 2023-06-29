import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
      //  apiKey: "AIzaSyD_CcVVSnvqKBB0OkasauDdRmqRWfvZVv0",
      //  authDomain: "boonect-64984.firebaseapp.com",
      //  projectId: "boonect-64984",
      //  storageBucket: "boonect-64984.appspot.com",
      //  messagingSenderId: "217200226832",
      //  appId: "1:217200226832:web:0d7764ae21008efda3d095",
      //  measurementId: "G-5YYJ7EGJ6H"
    //   apiKey: "AIzaSyBN3wTgHGziGgdnLF-m-w0KL-E-PpGaS6Q",
    // authDomain: "blogapp-4179f.firebaseapp.com",
    // projectId: "blogapp-4179f",
    // storageBucket: "blogapp-4179f.appspot.com",
    // messagingSenderId: "80827430501",
    // appId: "1:80827430501:web:222e66c024df946e0e788c",
    // measurementId: "G-Q8LNRY3BSP"
    apiKey: "AIzaSyDtJj1TZBRDqklIcwy6izbH-5rVFT0Jsjk",
    authDomain: "boonect-986bb.firebaseapp.com",
    projectId: "boonect-986bb",
    storageBucket: "boonect-986bb.appspot.com",
    messagingSenderId: "140873765851",
    appId: "1:140873765851:web:f1d36f0b501514da864dfe",
    measurementId: "G-8C58HZ20T4"
  };
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;

