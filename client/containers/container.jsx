import React, {Component, PropTypes} from 'react';

export default class Container extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {
          this.props.children
        }
      </div>
    );
  }
}
