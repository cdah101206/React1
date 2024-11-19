import React from "react";
import "../assets/Cards.css";

function Cards({ Nombre, Estado, Especie, Genero, Foto}) {
  return (
    <div className="card">
      <div className="content_1card">
        <img
          src={Foto}
          alt={Nombre}
          className="img-fluid"
        />
      </div>
      <div className="content_2card">
        <h2>{Nombre}</h2>
        <small>Estado:</small>
        <p>{Estado}</p>
        <small>Especie:</small>
        <p>{Especie}</p>
        <small>Género:</small>
        <p>{Genero}</p>
      </div>
    </div>
  );
}

export default Cards;
