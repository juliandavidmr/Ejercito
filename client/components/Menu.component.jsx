import React, {Component, PropTypes} from 'react';

class Menu extends Component {
  render() {
    const {menu_list} = this.props;

    return (
      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">

          {menu_list.map((item, i) => {
            return (
              <li key={i}>
                <a href={item.href}>{item.name}</a>
              </li>
            );
          })}

        </ul>
      </div>
    );
  }
}

Menu.propTypes = {
  menu_list: PropTypes.array.isRequired
};

export default Menu;