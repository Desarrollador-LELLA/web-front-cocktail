import {
    SET_HOME_LISTAR_PRODUCTOS,
    SET_HOME_ERROR_POKEMONS,
    SET_HOME_LOADING_POKEMONS,
} from '../types/index';

const initialState = {
    listProductos: [],
    errorProductos: '',
    loadingProductos: false,
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOME_LISTAR_PRODUCTOS:
            return {
                ...state,
                listProductos: action.payload,
            };
        case SET_HOME_ERROR_POKEMONS:
            return {
                ...state,
                errorProductos: action.payload,
            };
        case SET_HOME_LOADING_POKEMONS:
            return {
                ...state,
                loadingProductos: action.payload,
            };
        default:
            return state;
    }
};

export default homeReducer;
