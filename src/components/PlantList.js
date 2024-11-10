import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onClickPlant}) {
  return (
    <ul className="cards">
      {plants.map(plant => <PlantCard key={plant.id} plant={plant} onClickPlant={onClickPlant}/>)}</ul>
  );
}

export default PlantList;