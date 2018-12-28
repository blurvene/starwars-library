import React, { Component } from 'react';

class Person extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    const info=this.props.personInfo;
    return(
      <div className="item">
        <ul>
          <li>Name: {info.name}</li>
          <li>Height: {info.height} sm</li>
          <li>Mass: {info.mass} kg</li>
          <li>Hair color: {info.hair_color}</li>
          <li>Skin color: {info.skin_color}</li>
          <li>Eye color: {info.eye_color}</li>
          <li>Birth year: {info.birth_year}</li>
          <li>Gender: {info.gender} sm</li>
          <li>Homeworld: {info.homeworld} </li>
        </ul>
      </div>
    );
  }
}
export default Person;
