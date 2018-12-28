import React, { Component } from 'react';
import ExpandedEntity from './ExpandedEntity';
import PrototypeInfo from './Lists/PrototypeInfo';
import Button from '@material-ui/core/Button';

class Content extends React.Component{
  constructor(props)
  {
    super(props);
    this.previousButtonClick=this.previousButtonClick.bind(this);
    this.nextBtnClick=this.nextBtnClick.bind(this);
    this.itemClick=this.itemClick.bind(this);
    this.renderPrototype=this.renderPrototype.bind(this);
    this.state={
      currentExpandedType:null,
      currentExpandedObject:null
    }
  }
  previousButtonClick(){
    this.props.prevClick();
  }
  nextBtnClick() {
      this.props.nextClick();
  }
    itemClick(url,type){
       return this.props.itemClicked(url,type)
            .then( ()=> {
                this.setState({
                    currentExpandedObject: this.props.contentObj,
                    currentExpandedType: this.props.typeOfObjects
                });
            })


    }

  renderPrototype(elem){

    return(
      <PrototypeInfo
        name={elem.name||elem.title}
        url={elem.url}
        onItemClick={this.itemClick}
        type={this.props.typeOfObjects}
        />
    );
  }

  render(){

    if(this.props.isItemExpanded &&
      this.props.typeOfObjects==this.state.currentExpandedType ){
      return (<ExpandedEntity
        entity={this.props.contentObj}
        typeOfObjects={this.props.typeOfObjects}
        loadList={this.props.loadElementsFromApi}
        onListElemClick={this.itemClick}
      />)
    }
    if(Array.isArray(this.props.contentObj)) {
        const loadedPrototypes = this.props.contentObj.map(this.renderPrototype);
        return (
            <div className="main-container">
                <div className='content'>
                    {loadedPrototypes}
                </div>
                <div className='navigation'>
                    <Button variant="contained" color='secondary'
                        onClick={this.previousButtonClick}>Previous</Button>
                    <Button variant="contained" color='secondary' size='large'
                            onClick={this.nextBtnClick}>Next</Button>
                </div>
            </div>
        );
    }
    return(<div>Loading</div>);
  }
}
export default Content;
