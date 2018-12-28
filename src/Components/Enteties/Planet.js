import React, { Component } from 'react';
class Planet extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const info=this.props.planetInfo;
    return(
      <div  className="item">
        <ul>
          <li>Name: {info.name}</li>
          <li>Rotation period: {info.rotation_period}</li>
          <li>Orbital period: {info.orbital_period}</li>
          <li>Diameter: {info.diameter}km</li>
          <li>Climate: {info.climate}</li>
          <li>Gravity: {info.gravity}</li>
          <li>Terrain: {info.terrain}</li>
          <li>Surface water: {info.surface_water}</li>
          <li>Population: {info.population}</li>
        </ul>
      </div>
    );
  }
}
export default Planet;
