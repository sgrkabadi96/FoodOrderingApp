import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dish from "./Dish";
import { clearCart } from "../utils/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  

  

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="container ">
      <div className="flex flex-wrap ">
        <h1 className="font-bold mx-5">Your cart : </h1>
        <button
          className="my-10 btn btn-danger ml-48"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
      <div className="w flex flex-wrap container">
        {cartItems.length == 0 ? (
          <h4 className="my-16">No items in Cart </h4>
        ) : (
          cartItems.map((ele) => (
            <Dish key={ele.info.id} card={ele} isCart={true} />
          ))
        )
        
        }
      </div>
    
    </div>
  );
}
