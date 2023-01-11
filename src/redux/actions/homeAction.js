import {
    SET_HOME_LISTAR_PRODUCTOS,
    SET_HOME_ERROR_POKEMONS,
    SET_HOME_LOADING_POKEMONS,
  } from '../types/index';
  
  const urlA = 'http://localhost:4000/productos';
  
  export const setListProductos = () => async (dispatch) => {
    const dis = await fetch(urlA)
      .then((res) => res.json())
      .then((data) => {
        return { type: SET_HOME_LISTAR_PRODUCTOS, payload: data };
      })
      .catch((err) => {
        return {
          type: SET_HOME_ERROR_POKEMONS,
          payload: err.message,
        };
      });
    dispatch(dis);
    dispatch({ type: SET_HOME_LOADING_POKEMONS, payload: false });
  };
  
  export const setErrorProductos = (valor) => {
    return {
      type: SET_HOME_ERROR_POKEMONS,
      payload: valor,
    };
  };
  
  export const setLoadingProductos = (valor) => {
    return {
      type: SET_HOME_LOADING_POKEMONS,
      payload: valor,
    };
  };