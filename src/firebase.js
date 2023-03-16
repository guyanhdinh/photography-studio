import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYEIZMiZWslrW7udvFdF4kF3CKjy9sGXQ",
  authDomain: "photography-15571.firebaseapp.com",
  projectId: "photography-15571",
  storageBucket: "photography-15571.appspot.com",
  messagingSenderId: "700096058386",
  appId: "1:700096058386:web:92b35ce9fb3e0af81334cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const photosCollectionRef = collection(db, "photos");

export async function getAllPhotos() {
  const querySnapshot = await getDocs(photosCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));
  return dataArr;
}
