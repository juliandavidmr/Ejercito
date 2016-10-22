import React, {
  Component
} from 'react';
import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';

import IndexComponent from '../../components/Index.component.jsx';
import './style.css';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
  }

  render() {
    return <IndexComponent /> ;
  }
}

export default Index;