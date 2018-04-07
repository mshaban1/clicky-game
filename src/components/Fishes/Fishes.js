
import React from "react";
import "./Fishes.css";

const Fishes = props => (
  <div onClick={() => props.clickCard(props)} className="card col-sm-2 p-2 m-4">
    <img className="card" src={props.image} alt={props.name}/>
  </div>
);

export default Fishes;
