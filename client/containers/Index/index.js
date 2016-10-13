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
import * as BuscarActions from '../../actions/buscar';
import './style.css';

class Index extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list_semilleros: []
    };
  }

  componentWillMount() {
    const {
      actions_buscar
    } = this.props;

    // Semilleros
    actions_buscar.listar().then(() => {
      var l = this.props.semilleros.semillero.toJS();

      if (l.data_list_semilleros) {
        console.log('fetchBuscar =>', l.data_list_semilleros);

        this.setState({
          list_semilleros: l.data_list_semilleros
        });
      }
    });
  }

  render() {
    return <IndexComponent / > ;
  }
}

function mapStateToProps(state) {
  // console.log("==mapStateToProps: ", state);
  return {
    buscar: state.buscar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions_buscar: bindActionCreators(BuscarActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);