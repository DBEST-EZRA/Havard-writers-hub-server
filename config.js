const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");

const firebaseConfig = {
  apiKey: "AIzaSyAfwD1MblJJuCeYj94xat3HuhmBztgdO-E",
  authDomain: "writers-eec95.firebaseapp.com",
  projectId: "writers-eec95",
  storageBucket: "writers-eec95.appspot.com",
  messagingSenderId: "218447697623",
  appId: "1:218447697623:web:f4618ff005955843fbc292",
  measurementId: "G-7P1G05BX0B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const Users = collection(db, "users");
const Tasks = collection(db, "tasks");
const Notices = collection(db, "notices");
const Bidders = collection(db, "bidders");
const Unapproved = collection(db, "unapproved");

module.exports = {
  db,
  auth,
  Users,
  Tasks,
  Notices,
  Bidders,
  Unapproved,
};
