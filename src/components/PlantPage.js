import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants = [], addNewPlant, onClickPlant }) { // Default to an empty array if plants is undefined
  const [searchTerm, setSearchTerm] = useState('');

  const searchplants = Array.isArray(plants) ? plants.filter(
    plant => plant.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  ) : [];

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search handleSearch={setSearchTerm} />
      <PlantList plants={searchplants} onClickPlant={onClickPlant} />
    </main>
  );
}

export default PlantPage;
