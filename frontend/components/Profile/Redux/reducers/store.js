import {createStore, combineReducers} from 'redux';
import profileDataReduer from "./profileReduer";

const rootReducer = combineReducers({
    data: profileDataReduer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;