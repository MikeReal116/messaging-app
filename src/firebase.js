import  firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDI5cVa-OCzc27JacDgfTf33lx49e2Q2A4",
    authDomain: "login-10aef.firebaseapp.com",
    projectId: "login-10aef",
    storageBucket: "login-10aef.appspot.com",
    messagingSenderId: "440708426809",
    appId: "1:440708426809:web:5285a6f7240c81d47d71e8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
export { auth , provider}
export default db;

