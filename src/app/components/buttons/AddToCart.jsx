"use client";
import React, { useState } from "react";

const AddToCart = () => {
    const [inCart, setInCart] = useState(false);
    const handleCart = () => {
        setInCart(true);
    };
  return (
    <button onClick={handleCart}
    disabled={inCart}
      type="button"
      className="flex-1 rounded-lg bg-orange-500 px-4 py-2.5 font-semibold text-white transition duration-300 hover:bg-orange-600 active:scale-95 disabled:bg-gray-200 disabled:text-gray-400"
    >
        {inCart ? "Added" : "Add to Cart"}
    </button>
  );
};

export default AddToCart;
