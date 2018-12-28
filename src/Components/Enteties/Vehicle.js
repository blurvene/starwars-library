import React, { Component } from 'react';
class Vehicle extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const info=this.props.vehicleInfo;
    return(
      <div  className="item">
        <ul>
          <li>Name: {info.name}</li>
          <li>Model: {info.model}</li>
          <li>Manufacturer: {info.manufacturer}</li>
          <li>Length: {info.length}</li>
          <li>Cost: {info.cost_in_credits} credits</li>
          <li>Max atmosphering speed: {info.max_atmosphering_speed}</li>
          <li>Crew: {info.crew}</li>
          <li>Passengers: {info.passengers}</li>
          <li>Cargo capacity: {info.cargo_capacity}</li>
          <li>Consumables: {info.consumables}</li>
          <li>Vehicle Class: {info.vehicle_class}</li>
        </ul>
      </div>
    );
  }
}
export default Vehicle;
