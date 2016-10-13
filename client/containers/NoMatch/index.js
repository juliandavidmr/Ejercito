import React, {Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NoMatchComponent from '../../components/NoMatch/NoMatch.component.jsx';

class NoMatch extends Component {
  render() {
    return (
      <div>
        <NoMatchComponent />
      </div>
    );
  }
}

NoMatch.propTypes = {

};

export default NoMatch;