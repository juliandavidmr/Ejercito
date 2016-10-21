import React, {Component, PropTypes} from 'react';

class Fotos extends Component {
  render() {
    const {fotos_list} = this.props;

    return (
      <section className="apps_screen page" id="FOTOS">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1 wow fadeInBig" data-wow-duration="1s">

              <div className="section_title">
                <h2>Carrera 2015</h2>
                <p>quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="screen_slider">
          <div id="demo" className="wow bounceInRight" data-wow-duration="1s">
            <div id="owl-demo" className="owl-carousel">
              {
                fotos_list.map((item, i) => {
                  return (
                    <div className="item" key={i}>
                      <a href={item.image} rel="prettyPhoto[pp_gal]">
                        <img
                          src={item.image}
                          width={item.width}
                          height={item.height}
                          alt="APPS SCREEN"/>
                      </a>
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Fotos.propTypes = {
  fotos_list: PropTypes.array.isRequired
};

export default Fotos;