import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// Buscar
import Buscar from './containers/Buscar/index.jsx';

import NoMatch from './containers/NoMatch'; // 404 o no encontrado

import configure from './store';

const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

const basename = '/';
console.log('URL: ', window.location.href);

ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path={basename} component={Buscar}></Route>

    <Route path="*" component={Buscar}/>
  </Router>
</Provider>, document.getElementById('root'));
