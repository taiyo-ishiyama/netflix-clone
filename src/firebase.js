import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCqQ--V5x_3xGVgLs9yNt9WfbKXp_-GUk8",
  authDomain: "netflix-clone-91a2f.firebaseapp.com",
  projectId: "netflix-clone-91a2f",
  storageBucket: "netflix-clone-91a2f.appspot.com",
  messagingSenderId: "412469956494",
  appId: "1:412469956494:web:b76235b634fd7e0c329edf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const login = async(email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = () => {
  signOut(auth).then(() => {
  }).catch((error) => {
    console.error(error);
    toast.error(error.message);
  });
}

export { auth, db, login, signup, logout };
