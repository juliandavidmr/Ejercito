import React, {Component, PropTypes} from 'react';

class Patrocinadores extends Component {
  render() {
    const {patrocinadores_list} = this.props;
    
    var l = (patrocinadores_list || []).length;

    return (
      <section id="PATROCINADORES" className="testimonial parallax">
        <div className="section_overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-12 wow bounceInDown">
                <div
                  id="carousel-example-caption-testimonial"
                  className="carousel slide"
                  data-ride="carousel">

                  <ol className="carousel-indicators">
                    {
                      patrocinadores_list.map((item, i) => {                        
                        return (
                          <li
                            key={i}
                            data-target="#carousel-example-caption-testimonial"
                            data-slide-to={i}
                            className={ i ==0 ? "active" : "" }
                          >
                          </li>
                        );
                      })
                    }
                  </ol>

                  <div className="carousel-inner">

                    {
                      patrocinadores_list.map((item, i) => {
                        return (
                          <div className={i == 0? "item active": "item"} key={i}>
                            <div className="container">
                              <div className="row">
                                <div className="col-md-12 text-center">
                                  <img src={item.image} alt=""/>
                                  <div className="testimonial_caption">
                                    <h2>{item.title},
                                    </h2>
                                    <h4>
                                      <span>{item.span1}</span>
                                      {item.span2}</h4>
                                    <p>{item.descr}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Patrocinadores.propTypes = {
  patrocinadores_list: PropTypes.array.isRequired
};

export default Patrocinadores;