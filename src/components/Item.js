import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="item">
      <Link to={`/item/${item.id}`}>
        <img src={item.pictureUrl} alt={item.title} />
        <h3>{item.title}</h3>
        <p>Preço: R$ {item.price.toFixed(2)}</p>
      </Link>
    </div>
  );
};

export default Item;