// src/components/ItemDetail.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [addedToCart, setAddedToCart] = useState(false); // Controla se o item foi adicionado
  const navigate = useNavigate();

  const handleAddToCart = (quantity) => {
    console.log(`Adicionado ${quantity} unidades do item ${item.title}`);
    setAddedToCart(true); // Atualiza o estado para mostrar o botão de finalizar compra
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} alt={item.title} />
      <p>{item.description}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>

      {!addedToCart ? (
        <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
      ) : (
        <button onClick={() => navigate("/cart")}>Finalizar Compra</button>
      )}
    </div>
  );
};

export default ItemDetail;
