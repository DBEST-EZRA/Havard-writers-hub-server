const express = require("express");
const cors = require("cors");
const { db, Unapproved, Users, Bidders, Tasks } = require("./config");
const {
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  deleteDoc,
  doc,
} = require("firebase/firestore");

const app = express();
app.use(express.json());
app.use(cors());

//START OF TASKS CRUD

//Read all documents in the tasks collection
app.get("/tasks", async (req, res) => {
  try {
    const snapshot = await getDocs(Tasks);
    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(tasks);
  } catch (error) {
    console.error("Error getting tasks ", error);
    res.status(500).send({ error: "Error getting tasks" });
  }
});

// Read a single task from tasks collection
app.get("/tasks/:id", async (req, res) => {
  try {
    const docRef = doc(Tasks, req.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      res.send({ id: docSnap.id, ...docSnap.data() });
    } else {
      res.status(404).send({ error: "Task not found" });
    }
  } catch (error) {
    console.error("Error getting Task ", error);
    res.status(500).send({ error: "Error getting Task" });
  }
});

// creating a new task in the tasks collection
app.post("/tasks/create", async (req, res) => {
  try {
    const data = req.body;
    await addDoc(Tasks, data);
    res.send({ msg: "Task added successsfully" });
  } catch (error) {
    console.error("Failed to add task, please try again ", error);
    res.status(500).send({ error: "Failed to add task, please try again" });
  }
});
//checks

// Update a task in the tasks collection
app.put("/tasks/:id", async (req, res) => {
  try {
    const docRef = doc(Tasks, req.params.id);
    await updateDoc(docRef, req.body);
    res.send({ msg: "Document updated successfully" });
  } catch (error) {
    console.error("Error updating document: ", error);
    res.status(500).send({ error: "Error updating document" });
  }
});

// Delete a task from the tasks collection
app.delete("/tasks/:id", async (req, res) => {
  try {
    const docRef = doc(Tasks, req.params.id);
    await deleteDoc(docRef);
    res.send({ msg: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document: ", error);
    res.status(500).send({ error: "Error deleting document" });
  }
});

//END OF TASKS CRUD

//START OF BIDDERS CRUD

//Read all bids in the bidders collection
app.get("/bids", async (req, res) => {
  try {
    const snapshot = await getDocs(Tasks);
    const tasks = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(tasks);
  } catch (error) {
    console.error("Error getting tasks ", error);
    res.status(500).send({ error: "Error getting tasks" });
  }
});

// Read a single bids in the bidders collection
app.get("/bids/:id", async (req, res) => {
  try {
    const docRef = doc(Bidders, req.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      res.send({ id: docSnap.id, ...docSnap.data() });
    } else {
      res.status(404).send({ error: "Bid not found" });
    }
  } catch (error) {
    console.error("Error getting Bid ", error);
    res.status(500).send({ error: "Error getting Bid" });
  }
});

// creating a new task in the tasks collection
app.post("/bids/create", async (req, res) => {
  try {
    const data = req.body;
    await addDoc(Bidders, data);
    res.send({ msg: "Bid added successsfully" });
  } catch (error) {
    console.error("Failed to bid, please try again ", error);
    res.status(500).send({ error: "Failed to bid, please try again" });
  }
});
//checks

// Update a bid in the bids collection
app.put("/bids/:id", async (req, res) => {
  try {
    const docRef = doc(Bidders, req.params.id);
    await updateDoc(docRef, req.body);
    res.send({ msg: "Bid updated successfully" });
  } catch (error) {
    console.error("Error updating Bid ", error);
    res.status(500).send({ error: "Error updating Bid" });
  }
});

// Delete a bid from the bids collection
app.delete("/bids/:id", async (req, res) => {
  try {
    const docRef = doc(Bidders, req.params.id);
    await deleteDoc(docRef);
    res.send({ msg: "Bid deleted successfully" });
  } catch (error) {
    console.error("Error deleting Bid ", error);
    res.status(500).send({ error: "Error deleting Bid" });
  }
});

//END OF BIDDERS CRUD

//START OF USERS CRUD

//Read all users in users collection
app.get("/users", async (req, res) => {
  try {
    const snapshot = await getDocs(Users);
    const users = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(users);
  } catch (error) {
    console.error("Error getting users ", error);
    res.status(500).send({ error: "Error getting users" });
  }
});

// Read a single user from the users collection
app.get("/users/:id", async (req, res) => {
  try {
    const docRef = doc(Users, req.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      res.send({ id: docSnap.id, ...docSnap.data() });
    } else {
      res.status(404).send({ error: "User not found" });
    }
  } catch (error) {
    console.error("Error getting user ", error);
    res.status(500).send({ error: "Error getting user" });
  }
});

// creating a new user in the users collection
app.post("/users/create", async (req, res) => {
  try {
    const data = req.body;
    await addDoc(Users, data);
    res.send({ msg: "user added successsfully" });
  } catch (error) {
    console.error("Failed to add user, please try again ", error);
    res.status(500).send({ error: "Failed to add user, please try again" });
  }
});
//checks

// Update a user in the users collection
app.put("/users/:id", async (req, res) => {
  try {
    const docRef = doc(Users, req.params.id);
    await updateDoc(docRef, req.body);
    res.send({ msg: "user updated successfully" });
  } catch (error) {
    console.error("Error updating user ", error);
    res.status(500).send({ error: "Error updating user" });
  }
});

// Delete a user from the users collection
app.delete("/users/:id", async (req, res) => {
  try {
    const docRef = doc(Users, req.params.id);
    await deleteDoc(docRef);
    res.send({ msg: "user deleted successfully" });
  } catch (error) {
    console.error("Error deleting document: ", error);
    res.status(500).send({ error: "Error deleting document" });
  }
});

//END OF USERS CRUD

//START OF UNAPPROVED CRUD

// Registering a new user in the Unapproved collection
app.post("/unapproved/create", async (req, res) => {
  try {
    const data = req.body;
    await addDoc(Unapproved, data);
    res.send({ msg: "Registration successful, wait for admin approval" });
  } catch (error) {
    console.error("Failed registration, please try again ", error);
    res.status(500).send({ error: "Failed registration, please try again" });
  }
});

//Read all documents in the unapproved collection
app.get("/unapproved", async (req, res) => {
  try {
    const snapshot = await getDocs(Unapproved);
    const unapproved = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.send(unapproved);
  } catch (error) {
    console.error("Error getting documents: ", error);
    res.status(500).send({ error: "Error getting documents" });
  }
});

// Read a single document from the Unapproved collection
app.get("/unapproved/:id", async (req, res) => {
  try {
    const docRef = doc(Unapproved, req.params.id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      res.send({ id: docSnap.id, ...docSnap.data() });
    } else {
      res.status(404).send({ error: "Document not found" });
    }
  } catch (error) {
    console.error("Error getting document: ", error);
    res.status(500).send({ error: "Error getting document" });
  }
});

// Update a document in the Unapproved collection
app.put("/unapproved/:id", async (req, res) => {
  try {
    const docRef = doc(Unapproved, req.params.id);
    await updateDoc(docRef, req.body);
    res.send({ msg: "Document updated successfully" });
  } catch (error) {
    console.error("Error updating document: ", error);
    res.status(500).send({ error: "Error updating document" });
  }
});

// Delete a document from the Unapproved collection
app.delete("/unapproved/:id", async (req, res) => {
  try {
    const docRef = doc(Unapproved, req.params.id);
    await deleteDoc(docRef);
    res.send({ msg: "Document deleted successfully" });
  } catch (error) {
    console.error("Error deleting document: ", error);
    res.status(500).send({ error: "Error deleting document" });
  }
});

//START OF UNAPPROVED CRUD

app.listen(5000, () => {
  console.log("server listening at port 5000");
});
