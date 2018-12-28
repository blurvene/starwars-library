import React, {Component} from 'react';
import Person from './Enteties/Person';
import Film from './Enteties/Film';
import Planet from './Enteties/Planet';
import Specie from './Enteties/Specie';
import Starship from './Enteties/Starship';
import Vehicle from './Enteties/Vehicle';

import Card from '@material-ui/core/Card';

import DataList from './Lists/DataList';


class ExpandedEntity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            areListsLoaded: false,
            lists: {}
        }
    }


    componentDidMount() {
        let promises = [];
        for (let prop in this.props.entity) {
            if (Array.isArray(this.props.entity[prop])) {

                const promise = new Promise((resolve, reject) => {
                    this.props.loadList(this.props.entity[prop], data => {
                        this.setState({
                            lists: {
                                ...this.state.lists,
                                [prop]: data
                            }
                        }, resolve);
                    });
                });
                promises.push(promise);
            }
        }
        Promise.all(promises).then(values => {
            this.setState({
                areListsLoaded: true
            })

        })
    }

    render() {
        const type = this.props.typeOfObjects;
        const entity = this.props.entity;
        let result = '';
        switch (this.props.typeOfObjects) {
            case 'people':
                result = <Person personInfo={entity}/>;
                break;
            case 'planets':
                result = <Planet planetInfo={entity}/>;
                break;
            case 'films':
                result = <Film filmInfo={entity}/>;
                break;
            case 'species':
                result = <Specie spieceInfo={entity}/>;
                break;
            case 'vehicles':
                result = <Vehicle vehicleInfo={entity}/>;
                break;
            case 'starships':
                result = <Starship starshipInfo={entity}/>;
                break;
            default:
                break;
        }
        let dataLists = [];
        if (this.state.areListsLoaded) {
            for (let elem in this.state.lists) {
                dataLists.push(
                    <DataList title={elem}
                              dataObjects={this.state.lists[elem]}
                              isRender={this.state.areListsLoaded}
                              onItemClick={this.props.onListElemClick}
                    />
                )
            }
        }

        return (
            <Card className="item">
                {result}
                {this.state.areListsLoaded ?
                dataLists
                    : <div>Loading data list</div>}

            </Card>
        );
    }
}

export default ExpandedEntity;
