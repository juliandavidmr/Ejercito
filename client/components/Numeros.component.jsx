import React, {Component, PropTypes} from 'react';

class Numeros extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <section className="fun_facts parallax" id="numeros">
        <div className="section_overlay">
          <div className="container wow bounceInLeft" data-wow-duration="1s">
            <div className="row text-center">
              <div className="col-md-3">
                <div className="single_fun_facts">
                  <i className="pe-7s-users"></i>
                  <h2>
                    <span className="counter_num">1000</span>
                    <span>+</span>
                  </h2>
                  <p>Participantes</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single_fun_facts">
                  <i className="pe-7s-star"></i>
                  <h2>
                    <span className="counter_num">7</span>
                    <span>+</span>
                  </h2>
                  <p>Kilometros, competitivo</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single_fun_facts">
                  <i className="pe-7s-up-arrow"></i>
                  <h2>
                    <span className="counter_num">3</span>
                    <span>+</span>
                  </h2>
                  <p>Kilometros, recreativo</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="single_fun_facts">
                  <i className="pe-7s-date"></i>
                  <h2>
                    <span className="counter_num">6</span>
                    <span>+</span>
                  </h2>
                  <p>Noviembre</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Numeros.propTypes = {};

export default Numeros;