import React,{Component} from 'react';
import Button from '@material-ui/core/Button';

class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.state={
      name:this.props.name
    }
  }
  handleItemClick(){

    this.props.clickMenuItem(this.state.name);
  }
  render(){
    return(
      <Button variant="outlined"
        fullWidth='true' 
      ><a onClick={this.handleItemClick}>{this.props.name}</a></Button>
    );
  }
}
export default MenuItem;
