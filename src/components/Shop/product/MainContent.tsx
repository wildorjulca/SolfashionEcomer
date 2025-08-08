"use client";
import React, { useState } from "react";
import ProductGrid from "./ProductGrid";

const MainContent = ({ products }) => {
  const [productStyle, setProductStyle] = useState("grid");

  return (
    <div className="xl:max-w-[870px] w-full">
      <ProductGrid
        productStyle={productStyle}
        setProductStyle={setProductStyle}
        products={products}
      />
    </div>
  );
};

export default MainContent;