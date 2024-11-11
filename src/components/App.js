import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const plantAPI = 'https://raw.githubusercontent.com/retycdev/plantsy_db/refs/heads/main/db.json'

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => fetch(plantAPI)
    .then(res => res.json())
    .then(setPlants), 
    []);


    function addNewPlant(plant){
      fetch(plantAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON' 
        },
        body: JSON.stringify(plant),
      })
      .then(res => res.json())
      .then(json => setPlants([...plants, json]))
    }

    const handleDelete = (id) => {
      const updatedPlants = plants.filter((plant) => {
        return plant.id !== id;
      });
      setPlants(updatedPlants);
    };

  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} addNewPlant={addNewPlant} onClickPlant={handleDelete}/>
    </div>
  );
}

export default App;