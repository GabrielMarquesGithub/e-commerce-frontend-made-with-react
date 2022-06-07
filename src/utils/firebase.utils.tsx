import { initializeApp } from "firebase/app";
import { getFirestore, collection, writeBatch, doc, query, getDocs } from "firebase/firestore/lite";

//import de types
import { ProductsType } from "../routes/products/products.component";

const firebaseConfig = {
  apiKey: "AIzaSyDhlhSJPW1YMBdGrSjrpOZKde__2S5X0CM",
  authDomain: "copabase-react-db.firebaseapp.com",
  projectId: "copabase-react-db",
  storageBucket: "copabase-react-db.appspot.com",
  messagingSenderId: "396623931956",
  appId: "1:396623931956:web:393d61a50306389793f861",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore();

type objSetType = {
  title: string;
};
//função para setar um o novo documento para o DB
export const addCollectionAndDoc = async <T extends objSetType>(
  collectionKey: string,
  objectsToAdd: T[]
): Promise<void> => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
};

//função para ler os dados no DB
export const getCategoriesAndDocuments = async (): Promise<ProductsType[]> => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q); // --- assíncrono

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as ProductsType);
};
