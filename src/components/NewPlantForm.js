import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [plant, setPlant] = useState({
    name: '', image: '', price: '',
  });

  function handleChange(e) {
    setPlant({ ...plant, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewPlant(plant);
    // Clear the input fields after submitting the form
    setPlant({ name: '', image: '', price: '' });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={plant.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={plant.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={plant.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
