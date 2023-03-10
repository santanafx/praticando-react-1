import React from "react";
import "./Profiles.css";

export const Profiles = (props) => {
  return (
    <div className="profiles">
      <img src={props.foto} alt={props.nome} />
      <h2>{props.nome}</h2>
    </div>
  );
};
