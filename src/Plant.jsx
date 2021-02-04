import React, { useState, useEffect } from 'react';
import data from './data/plant_info.json';

const Plant = ({ match }) => {
  const [info, setInfo] = useState();

  useEffect(() => {
    const id = match.params.id;
    readJSON(id);
  }, []);

  const readJSON = (plantID) => {
    const infoJSON = data.filter(plant => plant.id == plantID)[0];
    setInfo(infoJSON);
  }

  return (
    <div className="plant-card">
      {
        info &&
        <>
          <img className="plant-image" src={process.env.PUBLIC_URL + info.foto} />
          <div className="text-info">
            <h1 className="name">{info.nombre}</h1>
            <p className="date">Fecha: {info.fecha}</p>
            <h3>Descripción</h3>
            <p>{info.descripcion}</p>
          </div>
        </>
      }
    </div>
  );
}

export default Plant;