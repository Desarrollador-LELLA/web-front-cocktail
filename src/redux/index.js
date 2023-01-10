import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import homeReducer from '../redux/reducers/homeReducer';

//INGRESAR REDUCER DE CADA PAGE SI ES NECESARIO
const rootReducer = combineReducers({
    home: homeReducer,

});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;