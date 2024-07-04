const { initializeApp } = require("firebase/app");
const { getFirestore, collection } = require("firebase/firestore");

const firebaseConfig = {
  apiKey: "",
  authDomain: "havardwritershub.firebaseapp.com",
  projectId: "havardwritershub",
  storageBucket: "havardwritershub.appspot.com",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Users = collection(db, "users");
const Tasks = collection(db, "tasks");
const Bidders = collection(db, "bidders");
const Unapproved = collection(db, "unapproved");

module.exports = {
  Users,
  Tasks,
  Bidders,
  Unapproved,
};
