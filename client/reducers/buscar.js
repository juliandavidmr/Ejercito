import { combineReducers } from 'redux';

import {
  LISTAR_BUSQUEDA,
  VER_ROL,
  INSERTAR_ROL,
  ELIMINAR_ROL,
  ERROR_ACTUALIZAR_ROL,
  ERROR_INSERTAR_ROL,
  ERROR_ELIMINAR_ROL,
  ERROR_ROL
} from '../constants/buscar.js';

import Immutable from 'immutable';

const initialState = new Immutable.Map({
  data_list: [],
  error: null,
  result: false
});

export function buscar(state = initialState, action) {
  switch (action.type) {
    case LISTAR_BUSQUEDA:
      return state.merge({
        data_list: action.response.data,
        error: null,
        result: action.response.data.result
      });
    default:
      return state;
  }
}

const Reducer = combineReducers({
  buscar
});

export default Reducer;
