import React from 'react'
import './Faq.css'
const Faq = () => {
  return (
    <div className="container py-3" id='faq'>
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="accordion" id="faqExample">
                <div className="card">
                    <div className="card-header p-2" id="headingOne">
                        <h5 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              Q: WHY INVEST?
                            </button>
                          </h5>
                    </div>

                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#faqExample">
                        <div className="card-body">
                            <b>Answer:</b> <p>1-New project with new concept
                            <br/>
                            2-profit sharing from 1st month
                            <br/>
                            3-Staking platform with new ideas & Concept
                            <br/>
                            4-Strict vesting schedule
                            <br/>
                            5-Integrated solution for traders
                            </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header p-2" id="headingTwo">
                        <h5 className="mb-0">
                        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Q: WHAT IS TOKEN UTILITIES?
                        </button>
                      </h5>
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#faqExample">
                        <div className="card-body">
                        <p>1-Trading fees By WTE
                        <br/>
                        2-ICO Events "Staking certain Value of WTE for project owners & Participants"
                        <br/>
                        3-Tracking wallets Dapps Fees in WTE
                        <br/>
                        4-Payment BY WTE in WTE staking Platform
                        <br/>
                        5-By holding WTE having partial and full access of services in NFT world
                        </p>
                        </div>
                    </div>
                </div>
                
                
            </div>

        </div>
    </div>
    
</div>
  )
}

export default Faq
