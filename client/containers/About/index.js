
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IndexLink, NavLink } from 'react-router';
import AboutComponent from '../../components/About';
import * as TodoActions from '../../actions/todos';

class About extends Component {
  render() {
    const { todos, actions, children } = this.props;
    
    return (
      <AboutComponent />
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
