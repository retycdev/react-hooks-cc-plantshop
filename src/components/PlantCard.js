import React, { useState } from "react";

function PlantCard({ plant, onClickPlant }) {
  const { image, name, price } = plant;
  const [inStock, setInStock] = useState(true);
  const [error, setError] = useState(null); // State to hold error messages

  const handleDeletePlant = async () => {
    try {
      const response = await fetch(`https://my-json-server.typicode.com/retycdev/react-hooks-cc-plantshop/plants/db/${plant.id}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'Application/JSON',
          
        },
      });
      
      if (!response.ok) {
        throw new Error(`Failed to delete plant: ${response.status}`);
      }

      await response.json();
      onClickPlant(plant.id);
    } catch (err) {
      setError(err.message);
    }
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
      <button style={{ marginLeft: "10px", color: "white", background: "red" }} onClick={handleDeletePlant}>DELETE</button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if present */}
    </li>
  );
}

export default PlantCard;
