import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";
import Swal from "sweetalert2";

const SwalAlert = Swal;

const Show = () => {
  //1 - Configuraciòn de los Hooks
  const [products, setProducts] = useState([]);

  //2- Referencia a la DB firestore
  const productsCollection = collection(db, "products");

  //3 - Funcion para mostrar TODOS los docs
  const getProducts = async () => {
    const data = await getDocs(productsCollection);
    console.log(data.docs);
    setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  console.log(products);
  //4 - Funcion para ELIMINAR un doc

  //5 - Funcion de confirmacion para Sweet Alert 2

  //6 - usamos UseEffect
  useEffect(() => {
    getProducts();
  }, []);

  //7 - Devolvemos vista de componente

  return <div>show</div>;
};

export default Show;
