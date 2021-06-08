import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDayUGi8VGZROjmZsZxVMa13S7cGiiVHno",
  authDomain: "where-s-waldo-eece1.firebaseapp.com",
  projectId: "where-s-waldo-eece1",
  storageBucket: "where-s-waldo-eece1.appspot.com",
  messagingSenderId: "312856425505",
  appId: "1:312856425505:web:76287bf10f72f845cc5f60"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
export default firebase