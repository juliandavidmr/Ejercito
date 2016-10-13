
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';

import buscar from './buscar';

export default combineReducers({
  routing,
  buscar
});
