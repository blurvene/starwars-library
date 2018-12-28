'use strict'

const API_SUCCESS = 200;

function loadDataFromApi(path){
  return fetch(path)
  .then(response=>{
    if(response.status!==API_SUCCESS){
      alert("Can't load content from API");
      return new Error('APIERROR');
    }
    else{
      return response.json();
    }
  })
}

export default loadDataFromApi;
