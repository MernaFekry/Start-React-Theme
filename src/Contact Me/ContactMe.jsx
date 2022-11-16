import React, { Component } from 'react'
import '../App.css';

export default class ContactMe extends Component {
  render() {
    return <div className='container contactContainer py-5' id='Contact'>
                <div className="row contactSubtitle text-center mb-5">
                    <h2 className='fw-bolder'>CONTACT ME</h2>
                    <div className="contactIcon">
                        <i className="fa-solid fa-star fa-2x ms-2 me-2"></i>
                    </div>
                </div>
                <div className="row g-4 contactRow col-lg-6 m-lg-auto">

                    <div className="col-12">
                        <div className="contactItem">
                            <input type="text" className='form-control rounded-0' placeholder='Name' />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="contactItem">
                            <input type="email" className='form-control rounded-0' placeholder='Email Address'  />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="contactItem">
                            <input type="text" className='form-control rounded-0' placeholder='Phone Number'  />
                        </div>
                    </div>
                    <div className="col-12 mb-4">
                        <div className="contactItem">
                            <textarea className='form-control rounded-0' name="" id="" cols="30" rows="5" placeholder='Message'></textarea>                        </div>
                        </div>

                    <div className="col-12 ">
                        <div className="contactItem d-flex justify-content-left">
                            <button className='btn fw-bolder text-white py-3 px-4'>Send</button>
                        </div>
                    </div>

                </div>
                    
            </div>



                    


  }
}
