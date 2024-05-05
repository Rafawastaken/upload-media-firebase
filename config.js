import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAplPLsZ8OZqItJYs96mQEJdnUqT3m_k1k",
  authDomain: "uploadmedian.firebaseapp.com",
  projectId: "uploadmedian",
  storageBucket: "uploadmedian.appspot.com",
  messagingSenderId: "89704539368",
  appId: "1:89704539368:web:e03b6bd305f7f50be2155d",
};

// Check if a Firebase app has already been initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
