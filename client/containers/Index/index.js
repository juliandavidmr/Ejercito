import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IndexComponent from '../../components/Index';
import * as SemilleroActions from '../../actions/semilleros';
import * as NoticiasActions from '../../actions/noticia';
import './style.css';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list_semilleros: [],
      list_noticias: []
    };
  }


  componentWillMount() {
    const { actions_semilleros, actions_noticias } = this.props;

    // Semilleros
    actions_semilleros.listar().then(() => {
      var l = this.props.semilleros.semillero.toJS();

      if (l.data_list_semilleros) {
        console.log('fetchSemilleros =>', l.data_list_semilleros);

        this.setState({
          list_semilleros: l.data_list_semilleros
        });
      }
    });

    // Noticias
    actions_noticias.listar().then(() => {
      var n = this.props.noticias.noticia.toJS();

      if (n.data_list_noticias) {
        console.log('fetchNoticias =>', n.data_list_noticias);

        this.setState({
          list_noticias: n.data_list_noticias
        });
      }
    });
  }

  render() {
    return <IndexComponent />;
  }
}

function mapStateToProps(state) {
  // console.log("==mapStateToProps: ", state);
  return {
    semilleros: state.semilleros,
    noticias: state.noticia
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions_semilleros: bindActionCreators(SemilleroActions, dispatch),
    actions_noticias: bindActionCreators(NoticiasActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
