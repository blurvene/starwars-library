import SwAPI from "../Components/Utils/SwAPI";

const initialState={
    menuApiObject: {},
    loadedObjects: {},
    isMenuLoaded:false
};


export default function loadFromApi(state=initialState,action){
    switch (action.type) {
        case 'LOAD_MENU':
            return {
                ...state,
                isMenuLoaded: true,
                menuApiObject: action.data
            }
            break;

        case 'LOAD_DATA':
            return {
                ...state,
                loadedObjects: {
                    ...state.loadedObjects,
                    [action.path]:action.data
                }
            };
            break;
        case 'LOAD_LIST':

            break;
        default:
            return state;
    }
}
