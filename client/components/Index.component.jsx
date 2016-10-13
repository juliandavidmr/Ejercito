import React, {Component, PropTypes} from 'react';

class IndexComponent extends Component {
  render() {
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
                    <img src="assets/images/logo.png" alt="Logo"/></a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">

                    <li>
                      <a href="#HOME">HOME</a>
                    </li>
                    <li>
                      <a href="#ABOUT">ABOUT
                      </a>
                    </li>
                    <li>
                      <a href="#FEATURES">FEATURES</a>
                    </li>
                    <li>
                      <a href="#SCREENS">SCREENS</a>
                    </li>
                    <li>
                      <a href="#DOWNLOAD">DOWNLOAD
                      </a>
                    </li>
                    <li>
                      <a href="#CONTACT">CONTACT
                      </a>
                    </li>
                  </ul>
                </div>

              </div>

            </nav>

            <div className="container home-container">
              <div className="row">
                <div className="col-md-12">
                  <div className="logo text-center">

                    <img width="125" height="55" src="assets/images/logo.png" alt=""/></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-sm-8">
                  <div className="home_text">

                    <h1>Brilliant Landing Page Design. Executed for Your App</h1>
                    <p>Now create a beautiful, app landing page.</p>

                    <div className="download-btn">

                      <a className="btn home-btn wow fadeInLeft" href="#DOWNLOAD">Download</a>
                      <a className="tuor btn wow fadeInRight" href="#ABOUT">Take a tour
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-md-offset-1 col-sm-4">
                  <div className="home-iphone">
                    <img src="assets/images/iPhone_Home.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="TESTIMONIAL" className="testimonial parallax">
          <div className="section_overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-12 wow bounceInDown">
                  <div
                    id="carousel-example-caption-testimonial"
                    className="carousel slide"
                    data-ride="carousel">

                    <ol className="carousel-indicators">
                      <li
                        data-target="#carousel-example-caption-testimonial"
                        data-slide-to="0"
                        className="active"></li>
                      <li data-target="#carousel-example-caption-testimonial" data-slide-to="1"></li>
                      <li data-target="#carousel-example-caption-testimonial" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 text-center">

                              <img src="assets/images/client_1.png" alt=""/>
                              <div className="testimonial_caption">
                                <h2>Dan Harmon</h2>
                                <h4>
                                  <span>SR. UI Designer,</span>
                                  Dcrazed</h4>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 text-center">

                              <img src="assets/images/client_2.png" alt=""/>
                              <div className="testimonial_caption">

                                <h2>Allie Kingsley</h2>
                                <h4>
                                  <span>SR. Content Strategist,</span>
                                  Designscrazed</h4>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="container">
                          <div className="row">
                            <div className="col-md-12 text-center">

                              <img src="assets/images/client_3.png" alt=""/>
                              <div className="testimonial_caption">

                                <h2>Joel Mchale</h2>
                                <h4>
                                  <span>SR. Developer,</span>
                                  Treehouse</h4>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud
                                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="FEATURES" className="features page">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">

                <div className="section_title wow fadeIn" data-wow-duration="1s">
                  <h2>Features</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
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
                      <span className="pe-7s-like"></span>
                    </div>

                    <h3>Creative Design<span>/</span>
                    </h3>
                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor
                      incididunt</p>
                  </div>

                  <div className="left_single_feature">

                    <div>
                      <span className="pe-7s-science"></span>
                    </div>

                    <h3>Modern Look<span>/</span>
                    </h3>
                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor
                      incididunt</p>
                  </div>

                  <div className="left_single_feature">

                    <div>
                      <span className="pe-7s-look"></span>
                    </div>

                    <h3>Minimal Layout<span>/</span>
                    </h3>
                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor
                      incididunt</p>
                  </div>

                </div>
                <div className="col-md-4">
                  <div className="feature_iphone">

                    <img
                      className="wow bounceIn"
                      data-wow-duration="1s"
                      src="assets/images/iPhone02.png"
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
                      <span>/</span>Retina ready</h3>
                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor
                      incididunt</p>
                  </div>

                  <div className="right_single_feature">

                    <div>
                      <span className="pe-7s-phone"></span>
                    </div>

                    <h3>
                      <span>/</span>Responsive Ready</h3>
                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor
                      incididunt</p>
                  </div>

                  <div className="right_single_feature">

                    <div>
                      <span className="pe-7s-gleam"></span>
                    </div>

                    <h3>
                      <span>/</span>Clean Code</h3>
                    <p>Lorem ipsum dolor, consectetur sed do adipisicing elit, sed do eiusmod tempor
                      incididunt</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="call_to_action">
          <div className="container">
            <div className="row wow fadeInLeftBig" data-wow-duration="1s">
              <div className="col-md-9">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et olore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip.</p>
              </div>
              <div className="col-md-3">
                <a className="btn btn-primary btn-action" href="#" role="button">Download Now</a>
              </div>
            </div>
          </div>
        </div>

        <section className="apps_screen page" id="SCREENS">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1 wow fadeInBig" data-wow-duration="1s">

                <div className="section_title">
                  <h2>Screenshots</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="screen_slider">
            <div id="demo" className="wow bounceInRight" data-wow-duration="1s">
              <div id="owl-demo" className="owl-carousel">

                <div className="item">
                  <a href="assets/images/screens/iPhone04.png" rel="prettyPhoto[pp_gal]">
                    <img src="assets/images/iPhone04.png" width="60" height="60" alt="APPS SCREEN"/>
                  </a>
                </div>
                <div className="item">
                  <a href="assets/images/screens/iPhone05.png" rel="prettyPhoto[pp_gal]">
                    <img src="assets/images/iPhone05.png" width="60" height="60" alt="APPS SCREEN"/>
                  </a>
                </div>
                <div className="item">
                  <a href="assets/images/screens/iPhone06.png" rel="prettyPhoto[pp_gal]">
                    <img src="assets/images/iPhone06.png" width="60" height="60" alt="APPS SCREEN"/>
                  </a>
                </div>
                <div className="item">
                  <a href="assets/images/screens/iPhone07.png" rel="prettyPhoto[pp_gal]">
                    <img src="assets/images/iPhone07.png" width="60" height="60" alt="APPS SCREEN"/>
                  </a>
                </div>
                <div className="item">
                  <a href="assets/images/screens/iPhone08.png" rel="prettyPhoto[pp_gal]">
                    <img src="assets/images/iPhone08.png" width="60" height="60" alt="APPS SCREEN"/>
                  </a>
                </div>
                <div className="item">
                  <a href="assets/images/screens/iPhone09.png" rel="prettyPhoto[pp_gal]">
                    <img src="assets/images/iPhone09.png" width="60" height="60" alt="APPS SCREEN"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fun_facts parallax">
          <div className="section_overlay">
            <div className="container wow bounceInLeft" data-wow-duration="1s">
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="single_fun_facts">
                    <i className="pe-7s-cloud-download"></i>
                    <h2>
                      <span className="counter_num">699</span>
                      <span>+</span>
                    </h2>
                    <p>Downloads</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single_fun_facts">
                    <i className="pe-7s-look"></i>
                    <h2>
                      <span className="counter_num">1999</span>
                      <span>+</span>
                    </h2>
                    <p>Likes</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single_fun_facts">
                    <i className="pe-7s-comment"></i>
                    <h2>
                      <span className="counter_num">199</span>
                      <span>+</span>
                    </h2>
                    <p>Feedbacks</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="single_fun_facts">
                    <i className="pe-7s-cup"></i>
                    <h2>
                      <span className="counter_num">10</span>
                      <span>+</span>
                    </h2>
                    <p>Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="download page" id="DOWNLOAD">
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-md-offset-1">

                <div className="section_title">
                  <h2>download now</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>

              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div
                  className="download_screen text-center wow fadeInUp"
                  data-wow-duration="1s">
                  <img src="assets/images/download_screen.png" alt=""/>
                </div>
              </div>
            </div>
          </div>

          <div className="available_store">
            <div className="container  wow bounceInRight" data-wow-duration="1s">
              <div className="col-md-6">
                <div className="available_title">
                  <h2>Available on</h2>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
              </div>

              <div className="col-md-6">
                <div className="row">
                  <a href="">
                    <div className="col-md-4 no_padding">
                      <div className="single_store">
                        <i className="fa fa-apple"></i>
                        <div className="store_inner">
                          <h2>iOS</h2>
                        </div>
                      </div>
                    </div>
                  </a>
                  <div className="col-md-4 no_padding">
                    <a href="">
                      <div className="single_store">
                        <i className="fa fa-android"></i>
                        <div className="store_inner">
                          <h2>ANDROID</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-4 no_padding">
                    <a href="">
                      <div className="single_store last">
                        <i className="fa fa-windows"></i>
                        <div className="store_inner">
                          <h2>WINDOWS</h2>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="contact page" id="CONTACT">
          <div className="section_overlay">
            <div className="container">
              <div className="col-md-10 col-md-offset-1 wow bounceIn">
                <div className="section_title">
                  <h2>Get in touch</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
                </div>
              </div>
            </div>

            <div className="contact_form wow bounceIn">
              <div className="container">

                <div className="form_error text-center">
                  <div className="name_error hide error">Please Enter your name</div>
                  <div className="email_error hide error">Please Enter your Email</div>
                  <div className="email_val_error hide error">Please Enter a Valid Email Address</div>
                  <div className="message_error hide error">Please Enter Your Message</div>
                </div>
                <div className="Sucess"></div>

                <form role="form">
                  <div className="row">
                    <div className="col-md-4">
                      <input type="text" className="form-control" id="name" placeholder="Name"/>
                      <input type="email" className="form-control" id="email" placeholder="Email"/>
                      <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                    </div>

                    <div className="col-md-8">
                      <textarea
                        className="form-control"
                        id="message"
                        rows="25"
                        cols="10"
                        placeholder="  Message Texts..."></textarea>
                      <button type="button" className="btn btn-default submit-btn form_submit">SEND MESSAGE</button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-12 wow bounceInLeft">
                  <div className="social_icons">
                    <ul>
                      <li>
                        <a href="">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-dribbble"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-behance"></i>
                        </a>
                      </li>
                      <li>
                        <a href="">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
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
                    <h2>SUBSCRIBE US</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
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

                    <button type="submit" className="btn btn-default subs-btn">Submit</button>
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

                  <p>Copyright &copy; 2016. All Rights Reserved.</p>
                  <p>A theme by
                    <a href="https://dcrazed.com/">Dcrazed</a>
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