import React from "react";

const Item = ({ item }) => {
  return (
    <div className="item">
      <img src={item.pictureUrl} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <p>Preço: R$ {item.price.toFixed(2)}</p>
    </div>
  );
};

export default Item;