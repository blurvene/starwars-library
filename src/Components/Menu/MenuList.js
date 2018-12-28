import React,{ Component } from 'react';
import MenuItem from './MenuItem'
class MenuList extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    const elements=this.props.menuElements;

    const listOfElements=elements.map((elem,index) =>
      <MenuItem name={elem}
        clickMenuItem={this.props.onClick}
      />)
    return (
      <ul className="menu-container">
        {listOfElements}
      </ul>
    );
  }
}
export default MenuList;
