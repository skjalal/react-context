import React from "react";
import type { ProductProps } from "../utils/type-utils.ts";
import { useCart } from "../store/CartContext.tsx";

const Product: React.FC<ProductProps> = ({
  id,
  image,
  title,
  price,
  description,
}) => {
  const { addItemToCart } = useCart();

  return (
    <article className="product">
      <img src={image} alt={title} />
      <div className="product-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">${price}</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => addItemToCart(id)}>Add to Cart</button>
        </p>
      </div>
    </article>
  );
};

export default Product;
