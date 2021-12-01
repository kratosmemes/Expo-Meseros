// Import firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, you have to paste here the object that comes from firebase
const firebaseConfig = {
  apiKey: "AIzaSyCrsVoFZEXI4RtgEJFy_8wgQOsABS-4gX0",
  authDomain: "proyectou2-a8618.firebaseapp.com",
  projectId: "proyectou2-a8618",
  storageBucket: "proyectou2-a8618.appspot.com",
  messagingSenderId: "598153673654",
  appId: "1:598153673654:web:88d07bff871c4d20e6df17"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  console.info({ firebase });
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };