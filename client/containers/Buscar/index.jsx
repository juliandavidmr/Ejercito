import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {default as BuscarComponent} from '../../components/Buscar/Listar.component.jsx'

import * as BuscarActions from '../../actions/buscar.js';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Types',
      description: 'Explore @Types Packages',
      list_packages: [],
      show_list: [],
      text_search: ''
    };

    this.handleSearch = this
      .handleSearch
      .bind(this);
  }

  // Antes de renderizar el componente
  componentWillMount() {
    const {actions} = this.props;

    actions
      .listar()
      .then(() => {
        var result = this
          .props
          .buscar
          .buscar
          .get('data_list')
          .toJS();

        console.log('list ===>>=>==> ', result);

        this.setState({
          list_packages: result.items || [],
          show_list: result.items || [],
          cargando: false
        });
      })
      .catch(err => {
        console.log('ERROR> ', err);

        this.setState({cargando: false});
      });
  }

  handleSearch(e) {
    // console.log('Event: ', e.target.value);
    this.setState({text_search: e.target.value});

    var list = this
      .state
      .list_packages
      .filter((value) => {
        return value
          .description
          .toLowerCase()
          .match(this.state.text_search) || value
          .name
          .toLowerCase()
          .match(this.state.text_search);
      });

    this.setState({show_list: list});
  }

  render() {
    return (
      <div>
        <div className="applicationLayout">
          <div className="content-overlay"></div>
          <div className="content">

            <nav className="nav white">
              <a className="logo" href="https://atmospherejs.com/">{this.state.title}</a>
            </nav>

            <div className="applicationHome">
              <header>
                <form style={{
                  "opacity": 0.905357
                }}>
                  <div className="page-title">{this.state.description}</div>
                  <div className="input-symbol center" data-search="">
                    <span className="icon-search"></span>
                    <input
                      className="search-field"
                      type="text"
                      name="search"
                      placeholder="Search packages now"
                      onChange={this.handleSearch}/>

                  </div>
                  <a href="https://npmjs.com" className="learn-more inverse">Learn more about NPM package management</a>
                </form>
              </header>

              <BuscarComponent show_list={this.state.show_list}/>
            </div>

            <footer className="applicationFooter">
              <div className="footer-row">
                <section className="about">
                  <div className="subtitle">Created By</div>
                  <a
                    href="https://twitter.com/anlijudavid"
                    className="twitter-follow-button"
                    data-show-count="false">Follow @anlijudavid</a>
                  <script async src="//platform.twitter.com/widgets.js"></script>
                </section>

                <section className="links">
                  <dl className="stats">
                    <dt>Packages</dt>
                    <dd>{this.state.list_packages.length}</dd>
                  </dl>
                </section>
              </div>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {buscar: state.buscar};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(BuscarActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
