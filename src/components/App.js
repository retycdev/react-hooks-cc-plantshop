import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const plantAPI = 'https://my-json-server.typicode.com/retycdev/react-hooks-cc-plantshop/db';

function App() {
  const [plants, setPlants] = useState([]);
  const [error, setError] = useState(null); // State to hold error messages

  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const res = await fetch(plantAPI);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setPlants(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchPlants();
  }, []);

  function addNewPlant(plant) {
    fetch(plantAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        'X-Master-Key':'$2a$10$p49Rrpj9wwrB4Lz1ct6UOeU0lRwfOB292qPuUnLKDYBxVaFRwqB/a',
        'X-Access-Key ':'$2a$10$T.SlEk6WXC/HZLEJGGsyre5KFOxKNCQ6BX9zNO2A5sarjjeobpcp.'
      },
      body: JSON.stringify(plant),
    })
    .then(res => res.json())
    .then(json => setPlants([...plants, json]))
    .catch(err => setError(`Failed to add plant: ${err.message}`));
  }

  const handleDelete = (id) => {
    const updatedPlants = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlants);
  };

  return (
    <div className="app">
      <Header />
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if present */}
      <PlantPage plants={plants} addNewPlant={addNewPlant} onClickPlant={handleDelete}/>
    </div>
  );
}

export default App;
