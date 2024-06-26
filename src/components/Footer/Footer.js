import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div style={{backgroundColor:"#5be3e3"}}>
  <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="index.html"><img src="/images/logo.png" alt="" className="img-fluid logo-footer"/></a>
                      

          </div>
          <div className="col-md-3">
            <div className="useful-link">
              <h2>Useful Links</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="img-fluid"/>
              <div className="use-links">
                <li><a href="#home"><i className="fa-solid fa-angles-right"></i> Home</a></li>
                <li><a href="#About"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
                <li><a href="#Roadmap"><i className="fa-solid fa-angles-right"></i> Roadmap</a></li>
                <li><a href="#contact"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
              </div>
            </div>

          </div>
                    <div className="col-md-3">
                        <div className="social-links">
              <h2>Follow Us</h2>
              <img src="./assets/images/about/home_line.png" alt=""/>
              <div className="social-icons">
                <li><a href="https://t.me/wte_global_channel"><i className="fa-brands fa-telegram"></i> Telegram</a></li>
                <li><a href="https://twitter.com/wtenergytech"><i className="fa-brands fa-twitter"></i> Twitter</a></li>
                
              </div>
            </div>
                    

                    </div>
          <div className="col-md-3">
            <div className="address">
              <h2>Address</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="img-fluid"/>
              <div className="address-links">
                <li className="address1"><i className="fa-solid fa-location-dot"></i> Office No. 43-44

                  Owned by Dubai Municipality

                  Bur Dubai- Al Fahidi</li>
                   
                   <li><a href="non"><i className="fa-solid fa-envelope"></i> admin@wtenergy.tech</a></li>
              </div>
            </div>
          </div>
                  
        </div>
      </div>

    </footer>
</div>
  )
}

export default Footer
