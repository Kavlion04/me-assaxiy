import React from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Savat</h2>
      {products.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} width={100} />
              <p>{product.title}</p>
              <p>{product.price * 13000} сум</p>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/")}>Orqaga</button>
    </div>
  );
};

export default Cart;
