
  import firebase from "firebase";
  import 'firebase/firestore';
  


  const firebaseConfig = {
        apiKey: "AIzaSyBsyESnWd2YSCTrbiTY34rxQaIphpAUvVA",
        authDomain: "todo-app-cp-dead2.firebaseapp.com",
        projectId: "todo-app-cp-dead2",
        storageBucket: "todo-app-cp-dead2.appspot.com",
        messagingSenderId: "279637125818",
        appId: "1:279637125818:web:ef348e2b3bb84c913c7083",
        measurementId: "G-M49BQZG0S5"

  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export {database};