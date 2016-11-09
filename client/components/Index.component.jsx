import React, {Component, PropTypes} from 'react';

import Menu from './Menu.component.jsx';
import Patrocinadores from './Patrocinadores.component.jsx';
import Numeros from './Numeros.component.jsx';
import Fotos from './Fotos.component.jsx';

class IndexComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      celular: "313 8812935"
    };
  }

  render() {

    const divStyle = {
      borderRadius: "81px 26px 76px 27px",
      border: "0 px solid #000000",
      width: "303 px",
      height: "118 px",
      backgroundColor: "#080808",
      color: "azure",
      fontSize: "medium",
      "padding-top": "20 px",
      paddingLeft: "30 px",
      paddingRight: "34 px"
    };

    return (
      <div>
        <div className="spn_hol">
          <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
        </div>

        <section className="header parallax home-parallax page" id="HOME">
          <h2></h2>
          <div className="section_overlay">
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
              <div className="container">

                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">
                    <img src="assets/images/ejercito/logo.png" alt="Logo"/>
                  </a>
                </div>

                <Menu
                  menu_list={[
                  {
                    href: '#HOME',
                    name: 'INICIO'
                  }, {
                    href: '#PATROCINADORES',
                    name: 'PATROCINADORES'
                  }, {
                    href: '#ALIANZA',
                    name: 'ALIANZA'
                  }, {
                    href: '#FOTOS',
                    name: 'FOTOS'
                  }, {
                    href: '#CONTACTO',
                    name: 'CONTACTO'
                  }, {
                    href: 'Login.aspx',
                    name: 'INICIAR SESIÓN'
                  }, {
                    href: 'Inscripcion.aspx',
                    name: 'INSCRIPCIONES'
                  }
                ]}/>

              </div>

            </nav>

            <div className="container home-container">

              <div className="row">
                <div style={divStyle}>
                  Agradecemos a los participantes que con su gran aporte hicieron que esta carrera
                  llegara a un feliz termino
                </div>
                <div className="col-md-12">
                  <div className="logo text-center">
                    <img
                      width="145"
                      height="150"
                      src="http://www.ejercito.mil.co/_templates/DEFAULT2012/recursos/images/cabezote/banner/Escudo-Ejercito-Nuevo.png"
                      alt=""/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-sm-8">
                  <div className="home_text">

                    <h1>Carrera por los Héroes</h1>
                    <p>
                      La Corporación Matamoros y ANASE se unieron para realizar la Carrera por los
                      Héroes a nivel nacional para apoyar a los héroes de la patria y sus familias.
                    </p>

                    <div className="download-btn">

                      <a className="btn home-btn wow fadeInLeft" href="#PATROCINADORES">PATROCINADORES</a>
                      <a className="tuor btn wow fadeInRight" href="#CONTACTO">Mas información
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1 col-sm-4">
                  <div className="home-iphone">
                    <img className="mini" src="assets/images/ejercito/portada_decor.jpg"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Patrocinadores
          patrocinadores_list={[
          {
            title: 'Emerald Energy',
            span1: 'Empresa,',
            span2: '1996',
            image: 'http://upload.wikimedia.org/wikipedia/en/8/88/Emerald_Energy_Logo.png',
            descr: 'Emerald Energy es una empresa, establecida en 1996 la cual hace parte de la Corporación Sinochem. Desde su constitución se ha dedicado principalmente a la exploración, desarrollo y producción de petróleo. Después de varios años de desarrollo, la empresa ya ha establecido equipos altamente experimentados y profesionales en tecnología y gestión de la exploración de petróleo y producción del mismo.'
          }, {
            title: 'Azteca Comunicaciones',
            span1: 'Empresa,',
            span2: '2011',
            image: 'assets/images/patrocinadores/azteca.png',
            descr: 'Azteca Comunicaciones Colombia, en el año 2011, fue la empresa seleccionada por el gobierno nacional para planear, diseñar, instalar, poner en servicio, administrar, operar y mantener la red de transporte óptico en cerca de 753 municipios y 2000 instituciones públicas, orientado a la expansión de la infraestructura de fibra óptica nacional, dentro del marco del Proyecto Nacional de Fibra Óptica'
          }, {
            title: 'Satena',
            span1: 'Empresa,',
            span2: 'Aerolinea',
            image: 'assets/images/patrocinadores/satena.png',
            descr: 'SATENA es la única aerolínea estatal que tiene la obligación de hacer presencia en aquellas regiones donde por cuestiones geográficas, de orden público y de pobreza, no llega ningún otro operador y es aquí donde precisamente se refleja el Estado en desarrollo y cumplimiento de sus fines y objetivos, cumple una labor de vital importancia en la generación de desarrollo económico y social de las regiones atendidas, integrándolas con los principales centros económicos del país'
          }, {
            title: 'Postobón',
            span1: 'Empresa,',
            span2: '1904',
            image: 'assets/images/patrocinadores/Postobon.png',
            descr: 'Postobón es una compañía de bebidas Colombiana. Es una de las empresas más grandes del país y una de las principales en América del Sur.'
          }, {
            title: 'Yo creo en Florencia',
            span1: 'Plan de desarrollo,',
            span2: '2016',
            image: 'https://pbs.twimg.com/profile_images/689076956139261953/HkUaS_hZ.jpg',
            descr: ''
          }
        ]}/>

        <section id="ALIANZA" className="features page">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">

                <div className="section_title wow fadeIn" data-wow-duration="1s">
                  <h2>Nuestra Alianza</h2>
                  <p>
                    La Corporación Matamoros y ANASE se unieron para realizar la Carrera por los
                    Héroes a nivel nacional para apoyar a los héroes de la patria y sus familias. El
                    objetivo de este evento es entregar una solución de vivienda a las familias, o
                    familiares de los soldados discapacitados o enfermos héroes del Caquetá.
                  </p>
                </div>

              </div>
            </div>
          </div>

          <div className="feature_inner">
            <div className="container">
              <div className="row">
                <div
                  className="col-md-4 right_no_padding wow fadeInLeft"
                  data-wow-duration="1s">

                  <div className="left_single_feature">

                    <div>
                      <span className="pe-7s-pin"></span>
                    </div>

                    <h3>Lugar<span>/</span>
                    </h3>
                    <p>Florencia Caquetá</p>
                  </div>

                  <div className="left_single_feature">

                    <div>
                      <span className="pe-7s-date"></span>
                    </div>

                    <h3>Fecha y hora<span>/</span>
                    </h3>
                    <p>Domingo 6 de noviembre de 2016, 7:30 am.</p>
                  </div>

                  <div className="left_single_feature">

                    <div>
                      <span className="pe-7s-way"></span>
                    </div>

                    <h3>Recorrido<span>/</span>
                    </h3>
                    <p>7 Km (competitivo)
                      <br/>
                      3 Km (recreativo)</p>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="feature_iphone">

                    <img
                      className="wow bounceIn"
                      data-wow-duration="1s"
                      src="assets/images/ejercito/deportista-corriendo.jpg"
                      alt=""/>
                  </div>
                </div>
                <div
                  className="col-md-4 left_no_padding wow fadeInRight"
                  data-wow-duration="1s">

                  <div className="right_single_feature">
                    <div>
                      <span className="pe-7s-monitor"></span>
                    </div>

                    <h3>
                      <span>/</span>Categorías</h3>
                    <p>Abierta Master Plus Acompañantes</p>
                  </div>

                  <div className="right_single_feature">

                    <div>
                      <span className="pe-7s-cash"></span>
                    </div>

                    <h3>
                      <span>/</span>Inscripciones</h3>
                    <p>50.000 pesos
                    </p>
                  </div>

                  <div className="right_single_feature">

                    <div>
                      <span className="pe-7s-gleam"></span>
                    </div>

                    <h3>
                      <span>/</span>Lanzamiento</h3>
                    <p>30 de septiembre en el parque San Francisco.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="call_to_action">
          <div className="container">
            <div className="row wow fadeInLeftBig" data-wow-duration="1s">
              <div className="col-md-6">
                <p>
                  <h1>Mapa del Recorrido</h1>

                  <br/>

                  <strong>
                    7 Km (competitivo)
                    <br/>
                    3 Km (recreativo)
                  </strong>
                </p>
              </div>
              <div className="col-md-3">
                <img src="assets/images/ejercito/mapa.jpeg" alt=""/>
              </div>
            </div>
          </div>
        </div>

        <Fotos
          fotos_list={[
          {
            image: 'assets/images/carrera2015/DSCN3438.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3452.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3452.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3452.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3488.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3499.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3502.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3534.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3534.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3544.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3604.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3605.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3611.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3613.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3623.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3624.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3631.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3635.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3701.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3702.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3708.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3711.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3713.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3718.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3724.JPG',
            width: '60',
            height: '60'
          }, {
            image: 'assets/images/carrera2015/DSCN3726.JPG',
            width: '60',
            height: '60'
          }
        ]}/>

        <Numeros/>

        <section className="contact page" id="CONTACTO">
          <div className="section_overlay">
            <div className="container">
              <div className="col-md-10 col-md-offset-1 wow bounceIn">
                <div className="section_title">
                  <h2>Contactanos y Participa</h2>
                  <p>
                    La Carrera de los Héroes, es un evento deportivo organizado por ANASE con en
                    respaldo de la Corporación Matamoros con el fin de promover la solidaridad de
                    los colombianos con los Héroes de la Patria y sus familias
                  </p>

                  <p>
                    <div className="col-md-12">
                      <div className="single_fun_facts">
                        <i className="pe-7s-phone"></i>
                      </div>
                      <h2>
                        <span>Llamanos al
                        </span>
                        <span className="">
                          <strong>313 881 2935</strong>
                        </span>
                      </h2>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12 wow bounceInLeft">
                  <div className="social_icons"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="subscribe parallax subscribe-parallax"
          data-stellar-background-ratio="0.6"
          data-stellar-vertical-offset="20">
          <div className="section_overlay wow lightSpeedIn">
            <div className="container">
              <div className="row">
                <div className="col-md-10 col-md-offset-1">

                  <div className="section_title">
                    <h2>Participa</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row  wow lightSpeedIn">
                <div className="col-md-6 col-md-offset-3">

                  <div className="subscription-success"></div>
                  <div className="subscription-error"></div>

                  <form id="mc-form" className="subscribe_form">
                    <div className="form-group">
                      <input
                        type="email"
                        value=""
                        name="EMAIL"
                        className="required email form-control"
                        id="mce-EMAIL"
                        placeholder="Enter Email Address"/>
                    </div>

                    <button type="submit" className="btn btn-default subs-btn">Enviar</button>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="copyright">
          <h2></h2>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="copy_right_text">
                  <p>
                    Copyright &copy; 2016. All Rights Reserved.
                  </p>
                  <p>Ejercito Nacional de
                    <a href="#">
                      Colombia</a>
                  </p>
                </div>

              </div>

              <div className="col-md-6">
                <div className="scroll_top">
                  <a href="#HOME">
                    <i className="fa fa-angle-up"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  }
}

IndexComponent.propTypes = {};

export default IndexComponent;