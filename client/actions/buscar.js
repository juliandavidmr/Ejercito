import axios from 'axios';

import {
  VER,
  LISTAR_BUSQUEDA,
  ERROR_ACTUALIZAR_BUSQUEDA,
  SUCCESSFULL_UPDATE_BUSQUEDA,
  ERROR
} from '../constants/buscar.js';

// ERROR LISTAR: Cuando ocurre un error al consultar el listado de roles
export function error_listar(error) {
  return {
    error,
    type: ERROR
  };
}

// REQUEST ROLES:
export function buscar_request(response) {
  return dispatch => {
    dispatch({
      response,
      type: LISTAR_BUSQUEDA
    });
  };
}

export function listar() {
  return dispatch =>
    axios.get('https://www.npmjs.com/profile/types/packages')
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log('=>=> Response listar: ', response);
          dispatch(buscar_request(response));
        } else {
          const error = new Error(response.statusText);
          error.response = response;

          dispatch(error_listar(error));
        }
      }).catch(err => {
        const error = new Error(err);

        dispatch(error_listar(error));
      });
}