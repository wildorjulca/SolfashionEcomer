"use client";
import React from "react";
import SingleGridItem from "@/components/Shop/SingleGridItem";
import SingleListItem from "@/components/Shop/SingleListItem";

const ProductItems = ({ item, productStyle }) => {
  return productStyle === "grid" ? (
    <SingleGridItem item={item} />
  ) : (
    <SingleListItem item={item} />
  );
};

export default ProductItems;