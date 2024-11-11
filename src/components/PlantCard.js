import React, { useState } from "react";

function PlantCard({plant, onClickPlant}) {
  const {image, name, price} = plant;
  const [inStock, setInStock] = useState(true);

  const handleDeletePlant = () => {
    fetch(`https://github.com/retycdev/react-hooks-cc-plantshop/blob/master/db.json/${plant.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onClickPlant(plant.id));
  };
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => setInStock(false)}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <button style={{marginLeft: "10px", color: "white", background: "red"}} onClick={handleDeletePlant}>DELETE</button>
    </li>
  );
}

export default PlantCard;