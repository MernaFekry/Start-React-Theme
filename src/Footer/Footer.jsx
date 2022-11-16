import React, { Component } from 'react'
import '../App.css';


export default class Footer extends Component {
  render() {
    return <section className='footerSection'>

<div className="container footerContainer p-5">
        <div className="row g-4">

            <div className="col-12 col-md-4 text-white text-center">
                <div className="footerItem">
                    <div className="row">
                        <h4>LOCATION</h4>
                    </div>
                    <div className="row col-12 col-lg-6 m-auto">
                        <p>2215 John Daniel Drive Clark, MO 65243</p>
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-4  text-center">
                 <div className="footerItem ">
                    <div className="row text-white">
                        <h4>AROUND THE WEB</h4>
                    </div>
                    <div className="row">
                        <ul className="footerIcons w-75 m-auto">
                            <li>
                                <a href=""><i className='fa-brands fa-facebook-f'></i></a>
                            </li>
                            <li>
                                <a href=""><i className='fa-brands fa-twitter'></i></a>
                            </li>
                            <li>
                                <a href=""><i className='fa-brands fa-linkedin'></i></a>
                            </li>
                            <li>
                                <a href=""><i className='fa-solid fa-globe'></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="col-12 col-md-4 text-white text-center">
                <div className="footerItem">
                    <div className="row ">
                        <h4>ABOUT FREELANCER</h4>
                    </div>
                    <div className="row col-12 col-lg-8 m-auto">
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
                    </div>    
                </div>
            </div>

        </div>

        

    </div>

    <div className="copyright p-3 text-white d-flex  align-items-center justify-content-center">
            <p className='text-center m-0'>Copyright © Your Website 2021</p>
    </div>
    </section>
  }
}
