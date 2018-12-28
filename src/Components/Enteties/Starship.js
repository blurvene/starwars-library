import React, { Component } from 'react';
class Starship extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const info=this.props.starshipInfo;
    return(
      <div  className="item">
        <ul>
          <li>Name: {info.name}</li>
          <li>Model: {info.model}</li>
          <li>Manufacturer: {info.manufacturer}</li>
          <li>Cost: {info.cost_in_credits} credits</li>
          <li>Length: {info.length}</li>
          <li>Max atmosphering speed: {info.max_atmosphering_speed}</li>
          <li>Crew: {info.crew}</li>
          <li>Passengers: {info.passengers}</li>
          <li>Cargo capacity: {info.cargo_capacity}</li>
          <li>Consumables: {info.consumables}</li>
          <li>Hyberdrive rating: {info.hyperdrive_rating}</li>
          <li>MGLT: {info.MGLT}</li>
          <li>Starship Class: {info.starship_class}</li>
        </ul>
      </div>
    );
  }
}
export default Starship;
