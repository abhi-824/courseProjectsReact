import React from "react";
import CartItem from "./CartItem";
import { useState, useEffect } from "react";
const Cart = (props) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      price: 8999,
      title: "Phone",
      qty: 1,
      img: "",
    },
    {
      id: 2,
      price: 999,
      title: "Watch",
      qty: 1,
      img: "",
    },
    {
      id: 3,
      price: 54999,
      title: "Laptop",
      qty: 1,
      img: "",
    },
  ]);
  useEffect(()=>{
    console.log("hhshsh")
  },[products])
  const handleIncreaseQuantity = (product) => {
    const productInd = products.findIndex((obj) => obj.id === product.id);
    product.qty++;
    products[productInd] = product;
    setProducts([...products]);
  };
  const handleDecreaseQuantity = (product) => {
    const productInd = products.findIndex((obj) => obj.id === product.id);
    products.qty--;
    products[productInd] = product;
    setProducts([...products]);
  };
  const handleDeleteProduct = (product) => {
    const productInd = products.findIndex((obj) => obj.id === product.id);
    products.splice(productInd);
    setProducts([...products]);
  };
  return (
    <div>
      <div>
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onInc={handleIncreaseQuantity}
              onDec={handleDecreaseQuantity}
              onDel={handleDeleteProduct}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
