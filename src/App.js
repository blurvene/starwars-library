import React, {Component} from 'react';
import Content from './Components/Content';
import MenuList from './Components/Menu/MenuList';

import SwAPI from './Components/Utils/SwAPI';
import {connect} from 'react-redux';
import './App.css';


///Main app component

class App extends Component {
    constructor(props) {
        super(props);
        const rootUrl = "https://swapi.co/api/";

        this.state = {
            rootUrl,
            contentObject: {},
            loadedObjects: {},
            clickedMenuName: '',
            isContentItemExpanded: false
        }
    }

    //Loading menu

    componentDidMount() {
        this.props.loadMenu(this.state.rootUrl);
    }

    //Checks if data is already loaded from api
    isAlreadyLoaded = (path) => {
        return !!this.props.loadedObjects[path];
    }

    //Loading objects from api,if we dont have them ,and adding it to content

    loadDataFromApi = (path) => {
        return new Promise((resolve)=>{
            if (this.isAlreadyLoaded(path)) {
                this.setState({
                    contentObject:this.props.loadedObjects[path],
                    isContentLoaded:true,
                },resolve);
            }
            else{
                this.props.loadData(path)
                    .then(()=>{
                        this.setState({
                            contentObject:this.props.loadedObjects[path],
                            isContentLoaded:true,
                        },resolve);
                    });
            }
        });

    }

    //Menu element clicked

    handleMenuClick = (name) => {
        this.loadDataFromApi(this.props.menuApiObject[name] + '?page=1');
        this.setState({
            clickedMenuName: name,
            contentType:name,
            isContentItemExpanded: false,
        });

    }

    //Prev , Next button clicked

    handleNextBtnClick = () => {
        const nextPath = this.state.contentObject.next;
        if (nextPath != null) {
            this.setState({

                isContentLoaded:false
            },()=> {
                this.loadDataFromApi(nextPath)
                    .then(()=>{
                        this.setState({
                            isContentLoaded:true
                        })
                    })
            });
        }
    }

    handlePrevBtnClick = () => {
        const prevPath = this.state.contentObject.previous;
        if (prevPath != null) {
            this.loadDataFromApi(prevPath);
        }
    }

    //Content item clicked
    changeContentType=(type)=>{
        this.setState({
            ...this.state,
            contentType:type=='characters'?'people':type,
        });
    }

    handleContentItemClick = (url,type) => {

        return this.loadDataFromApi(url)
            .then(()=>{
                this.changeContentType(type);
            })
        .then(()=> {
            this.setState({
                isContentItemExpanded: true,
            });
            console.log('Item selected');
        });
    }

    //Loading data list from api
    loadListsOfData = (urls, makeStateLoaded) => {

        let loadedObjects = [];
        const promises = [];
        for (let i = 0; i < urls.length; i++) {
            if (!this.isAlreadyLoaded(urls[i])) {
                let promise = this.props.loadData(urls[i])
                promises.push(promise);
            }
        }
        Promise.all(promises)
            .then(() => {
                for (let i = 0; i < urls.length; i++) {
                    loadedObjects.push(this.props.loadedObjects[urls[i]]);
                }
                makeStateLoaded(loadedObjects);
            })
    }


    render() {
        const curItem = this.state.contentType;

        if(!this.props.isMenuLoaded){
            return <div>Waiting</div>;
        }

        const menuElems = Object.getOwnPropertyNames(this.props.menuApiObject);
        const menuLinks = Object.values(this.props.menuApiObject);


        return (
            <div className="container">
                <MenuList menuElements={menuElems}
                          links={menuLinks}
                          onClick={this.handleMenuClick}/>
                {this.state.clickedMenuName===''?
                    <div></div>
                    :curItem !== '' && this.state.isContentLoaded ?
                    <Content name={curItem}
                             contentObj={this.state.contentObject.results || this.state.contentObject}
                             typeOfObjects={curItem}
                             nextClick={this.handleNextBtnClick}
                             prevClick={this.handlePrevBtnClick}
                             loadElementsFromApi={this.loadListsOfData}
                             isItemExpanded={this.state.isContentItemExpanded}
                             itemClicked={this.handleContentItemClick}
                    />
                    : <div>Loading content</div>}
            </div>

        );
    }
}


export default connect(
    state=>({
        isMenuLoaded:state.loadFromApi.isMenuLoaded,
        loadedObjects:state.loadFromApi.loadedObjects,
        menuApiObject: state.loadFromApi.menuApiObject
    }),

    dispatch=>({
        loadMenu: (rootUrl)=>{
            SwAPI(rootUrl)
                .then( data  => {
                    dispatch({type:'LOAD_MENU',data});
                })
        },
        loadData: (path) => {
            return SwAPI(path)
                .then( data  => {
                    dispatch({type:'LOAD_DATA',data,path});
                })
        }
    })
)(App);
