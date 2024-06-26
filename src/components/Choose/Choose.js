import React from 'react';
import './Choose.css';
import './Choose.scss';

const Choose = () => {
  return (
    <div className="feat bg-gray pt-5 pb-5" id="why">
      <div className="container">
        <div className="row">
          <div className="section-head col-sm-12">
            <h4>
              <span>Why Choose</span> Us?
            </h4>
            <p>Why You Choose WTE</p>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item fade-in">
              <span className="icon feature_box_col_one">
                <i className="fa-solid fa-money-check-dollar"></i>
              </span>
              <h6>Expert Crypto traders</h6>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item fade-in">
              <span className="icon feature_box_col_two">
                <i className="fa-solid fa-hand-holding-dollar"></i>
              </span>
              <h6>NFT project</h6>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item fade-in">
              <span className="icon feature_box_col_three">
                <i className="fa-solid fa-money-bill-trend-up"></i>
              </span>
              <h6>New traders</h6>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item fade-in">
              <span className="icon feature_box_col_four">
                <i className="fa-solid fa-lock"></i>
              </span>
              <h6>Cybersecurity specialists</h6>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6">
            <div className="item fade-in">
              <span className="icon feature_box_col_five">
                <i className="fa-solid fa-dumpster"></i>
              </span>
              <h6>E-commerce</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
