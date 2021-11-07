import firebase from "firebase";
import "firebase/firestore";
const FireBaseStore = {
  apiKey: "AIzaSyCl9SC7zlyOXmEDNy0X-Sknqu_eQu7-JCs",
  authDomain: "products-img-data.firebaseapp.com",
  projectId: "products-img-data",
  storageBucket: "products-img-data.appspot.com",
  messagingSenderId: "252033318119",
  appId: "1:252033318119:web:ec38e56780ad0507017642",
};

firebase.initializeApp(FireBaseStore);

export default firebase;
