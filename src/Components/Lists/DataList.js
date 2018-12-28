import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import PrototypeInfo from './PrototypeInfo';

class DataList extends React.Component{
  constructor(props){
    super(props);
    this.onListClick=this.onListClick.bind(this);
    this.state={
      isExpanded:false,
    }
  }
  onListClick(){
    this.setState({
      isExpanded:!this.state.isExpanded
    })
  }

  getDataList=()=>{
    const list = this.props.dataObjects.map(elem=>{
      return <PrototypeInfo
        name={elem.name||elem.title}
        url={elem.url}
        type={this.props.title}
        onItemClick={this.props.onItemClick}
        />
    })
    return list;
  }

  render(){
    let datas=null;
    if(this.props.isRender)
      datas=this.getDataList();
    return(
      <div className='data-list'
          onClick={this.onListClick}>
        <Button color="primary">{this.props.title}</Button>
        {this.state.isExpanded&&
          datas

        }
      </div>
    );
  }
}

export default DataList;
