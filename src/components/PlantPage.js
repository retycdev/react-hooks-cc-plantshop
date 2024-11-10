import React, { useEffect, useState }  from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";


function PlantPage({plants, addNewPlant, onClickPlant}) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchplants = plants.filter(
    plant => plant.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant}/>
      <Search handleSearch={setSearchTerm} />
      <PlantList plants={searchplants} onClickPlant={onClickPlant}/>
    </main>
  );
}

export default PlantPage;