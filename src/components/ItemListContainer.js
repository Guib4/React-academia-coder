import React, { useEffect, useState } from "react";
import { fetchMockItems } from "../mockData";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Emula o chamado assíncrono
    fetchMockItems()
      .then((data) => {
        setItems(data); // Define os dados
        setLoading(false); // Desativa o carregamento
      })
      .catch((error) => {
        console.error("Erro ao buscar itens:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Produtos</h1>
      {loading ? <p>Carregando produtos...</p> : <ItemList items={items} />}
    </div>
  );
};

export default ItemListContainer;