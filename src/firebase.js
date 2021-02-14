import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBIXDlrM8ne5oTFEIgYaNpxd0UyfrRBc-w",
    authDomain: "facebook-clone-b030c.firebaseapp.com",
    databaseURL: "https://facebook-clone-b030c.firebaseio.com",
    projectId: "facebook-clone-b030c",
    storageBucket: "facebook-clone-b030c.appspot.com",
    messagingSenderId: "804032476903",
    appId: "1:804032476903:web:9bc9f7c231f70f149d1442",
    measurementId: "G-T1XRNDBPWM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;

