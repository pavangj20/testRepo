import React, { useState } from "react";

import { Product } from "../model";
import ProductCard from "./ProductCard";
import { dummyProducts } from "../utils/ProductList";

const ProductList: React.FC = () => {
  const [productList, setProductList] = useState<Product[]>(dummyProducts);

  return (
    <div className="product-list">
      {productList.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
