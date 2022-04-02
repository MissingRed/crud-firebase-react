import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  collection,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";

const SwalAlert = Swal;

const Show = () => {
  //1 - Configuraciòn de los Hooks
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  //2- Referencia a la DB firestore
  const productsCollection = collection(db, "products");

  //3 - Funcion para mostrar TODOS los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(true);
  };
  //4 - Funcion para ELIMINAR un doc

  const setDelete = async (id) => {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    getProducts();
  };

  //5 - Funcion de confirmacion para Sweet Alert 2

  //6 - usamos UseEffect
  useEffect(() => {
    getProducts();
  }, []);

  //7 - Devolvemos vista de componente

  return (
    <>
      <div>
        {loading === true ? (
          products.map((data) => (
            <div key={data.id}>
              <p>{data.description}</p>
              <p>{data.id}</p>

              <button onClick={() => setDelete(data.id)}>Eliminar</button>
            </div>
          ))
        ) : (
          <p>Cargando</p>
        )}
      </div>
    </>
  );
};

export default Show;
