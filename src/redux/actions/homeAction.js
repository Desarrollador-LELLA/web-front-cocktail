import {
    SET_HOME_LISTAR_PRODUCTOS,
    SET_HOME_ERROR_POKEMONS,
    SET_HOME_LOADING_POKEMONS,
  } from '../types/index';
  
  const urlA = 'https://pi-pokemon-main-production-82f7.up.railway.app/pokemons';
  
  export const getListPokemons = () => async (dispatch) => {
    // const dis = await fetch(urlA)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     return { type: LISTAR_POKEMONS, payload: data.result };
    //   })
    //   .catch((err) => {
    //     return {
    //       type: SET_ERROR_POKEMONS,
    //       payload: err.message,
    //     };
    //   });
    // dispatch(dis);
    // dispatch({ type: SET_LOADING_POKEMONS, payload: false });
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