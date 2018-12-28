import React, { Component } from 'react';
class Film extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const info=this.props.filmInfo;
    return(
      <div  className="item">
        <ul>
          <li>Title: {info.title}</li>
          <li>Film №: {info.episode_id}</li>
          <li>Director: {info.director}</li>
          <li>Producer: {info.producer}</li>
          <li>Release date : {info.release_date}</li>
          <li>About: {info.opening_crawl}</li>
        </ul>
      </div>
    );
  }
}
export default Film;
