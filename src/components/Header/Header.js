import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <div className="hero_area" id='home'>

    <div className="hero_bg_box">
      <div className="bg_img_box">
        <img src="images/banner_bg.png" alt=""/>
      </div>
    </div>
    <header className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <a className="navbar-brand" href="index.html">
            <img src='/images/logo.png' alt='logo' style={{width:"100px" , height:"100px"}}/>
          </a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span icon="fa-regular fa-bars"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active">
                <a className="nav-link text-light" href="index.html">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#About"> About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#why">Why Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#Roadmap">Roadmap</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#faq">Faq</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#contact">contact us</a>
              </li>
              
            </ul>
          </div>
        </nav>
      </div>
    </header>
    <section className="slider_section ">
      <div id="customCarousel1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-6 fade-in-left">
                  <div className="detail-box">
                    <h1 className='text-light'>
                    Wonder Energy 
                    <br/>
                    Technology..
                    </h1>
                    <p className='text-light'>
                    #wte goes beyond being a cryptocurrency exchange by offering dedicated platforms for integrated solutions, providing traders and communities with comprehensive and accurate information on nominated tokens..
                    This facilitates informed decision-making and enhances the trading experience..
                    </p>
                    <div className="btn-box">
                      <a href="non" className="btn1">
                      Private sale
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-box">
                    <img src="images/slider-img.png" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>
    </div>
  )
}

export default Header
