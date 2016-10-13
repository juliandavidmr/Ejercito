import React, {Component, PropTypes} from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class ListarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      row_selected: []
    };

    this.handleClickRow = this.handleClickRow.bind(this);
  }

  handleClickRow(row, isSelected, event) {
    if (isSelected) {
      console.log('Click en row ', row, isSelected);

      this.setState({
        row_selected: row
      });
    }
  }

  render() {
    //Row select setting
    const selectRowProp = {
      mode: "checkbox", //checkbox for multi select, radio for single select.
      clickToSelect: true, //click row will trigger a selection on that row.
      bgColor: "rgb(238, 193, 213)", //selected row background color
      onSelect: this.handleClickRow
    };

    const { show_list } = this.props;

    return (
      <section id="packages" className="waypoint">
          <br />
          <ol className="grid fixed-height">
              {
                 show_list.length != 0? 'Loading...': ''
              }

              {
                  show_list.map((item, i) => {
                      return (
                          <li className="module packagesItem" key={i}>
                              <span className="metadata">
                                  <a
                                      href={'https://www.npmjs.com/package/' + item.name}
                                      className="click-intercept"></a>
                                  <span className="title">
                                      <a href={'https://www.npmjs.com/package/' + item.name}>{item.name}</a>
                                  </span>
                                  <p className="description">
                                      {item.description}
                                  </p>

                                  <div className="stats">
                                      <span className="stat-installs">
                                          <span className="icon-download"></span>
                                          {item.version}
                                      </span>

                                      <span className="stat-stars">
                                          <span className="icon-star"></span>
                                          {item.access}
                                          </span>
                                  </div>
                              </span>
                          </li>
                      );
                  })
              }

          </ol>

          <ol className="grid fixed-height"></ol>
      </section>
    );
  }
}

ListarComponent.propTypes = {
  show_list: PropTypes.array.isRequired
};

export default ListarComponent;
