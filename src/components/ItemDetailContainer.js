// src/components/ItemDetailContainer.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMockItems } from "../mockData";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams(); // Obtém o parâmetro :itemId

  useEffect(() => {
    setLoading(true);
    fetchMockItems()
      .then((data) => {
        const foundItem = data.find(
          (product) => product.id === parseInt(itemId, 10)
        );
        setItem(foundItem);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar item:", error);
        setLoading(false);
      });
  }, [itemId]); // Reexecuta o efeito quando itemId mudar

  if (loading) {
    return <p>Carregando detalhes do produto...</p>;
  }

  if (!item) {
    return <p>Produto não encontrado.</p>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <img src={item.pictureUrl} alt={item.title} />
      <p>{item.description}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
    </div>
  );
};

export default ItemDetailContainer;
