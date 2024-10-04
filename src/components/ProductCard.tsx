import React from "react";
import { Product } from "../model";
interface Props {
  product: Product;
}
const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
