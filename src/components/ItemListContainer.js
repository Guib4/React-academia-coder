// src/components/ItemListContainer.js
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMockItems } from "../mockData";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams(); // Obtém o parâmetro :categoryId

  useEffect(() => {
    setLoading(true);
    fetchMockItems()
      .then((data) => {
        if (categoryId) {
          // Filtra os itens por categoria
          const filteredItems = data.filter(
            (item) => item.categoryId === parseInt(categoryId, 10)
          );
          setItems(filteredItems);
        } else {
          setItems(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar itens:", error);
        setLoading(false);
      });
  }, [categoryId]); // Reexecuta o efeito quando categoryId mudar

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {loading ? <p>Carregando produtos...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;
