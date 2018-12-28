import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class PrototypeInfo extends React.Component{
  constructor(props){

    super(props);
    this.itemClick=this.itemClick.bind(this);

  }
  itemClick(){
    return this.props.onItemClick(this.props.url,this.props.type);
  }
  render(){
    const title=this.props.name;

    return(
      <Button variant="contained"
              color="primary"
              className='prototype-item'
           onClick={this.itemClick}
      >
        {title}
      </Button>
    );
  }
}

export default PrototypeInfo;
