import React, { Component } from 'react';
class Specie extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const info=this.props.spieceInfo;
    return(
      <div  className="item">
        <ul>
          <li>Name: {info.name}</li>
          <li>Classification: {info.classification}</li>
          <li>Designation: {info.designation}</li>
          <li>Average height: {info.average_height}</li>
          <li>Skin colors : {info.skin_colors}</li>
          <li>Hair colors : {info.hair_colors}</li>
          <li>Eyes colors : {info.eye_colors}</li>
          <li>Average lifespan: {info.average_lifespan}</li>
          <li>Language: {info.language}</li>
        </ul>
      </div>
    );
  }
}
export default Specie;
