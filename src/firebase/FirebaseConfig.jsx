// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBQsJ5MS4-MacHnO5wxQX8V2tGe0y6eCXo",
//   authDomain: "myecommerce2-7b8fc.firebaseapp.com",
//   projectId: "myecommerce2-7b8fc",
//   storageBucket: "myecommerce2-7b8fc.appspot.com",
//   messagingSenderId: "715233167432",
//   appId: "1:715233167432:web:3a0acec83b123399d3307d"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export { fireDB, auth }


// new firsebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyACb-blJcqc1TQcTba2acyBq--yX0JVdq8",
//   authDomain: "firstdemo-edaaf.firebaseapp.com",
//   projectId: "firstdemo-edaaf",
//   storageBucket: "firstdemo-edaaf.firebasestorage.app",
//   messagingSenderId: "868997983909",
//   appId: "1:868997983909:web:96044a062cb1b21626274c"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAj9uPSaw6FMsR8IjAl7UhNF1CymSPuGoI",
  authDomain: "newdemo-90f67.firebaseapp.com",
  projectId: "newdemo-90f67",
  storageBucket: "newdemo-90f67.firebasestorage.app",
  messagingSenderId: "808916430090",
  appId: "1:808916430090:web:51a9e8a7f7cff155609ef3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }