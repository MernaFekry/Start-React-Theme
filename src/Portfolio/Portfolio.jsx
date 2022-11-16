import React, { Component } from 'react';
import '../App.css';
import PortfolioImage from './../Portfolio Image/PortfolioImage';
import CabinImg from '../images/cabin.png';
import CakeImg from '../images/cake.png';
import CircusImg from '../images/circus.png';
import GameImg from '../images/game.png';
import SafeImg from '../images/safe.png';
import SubmarineImg from '../images/submarine.png';

class Portfolio extends Component {
    render() {
        return <div className='portfolioContainer py-5' id='Portfolio'>
            <div className="container">

                <div className="row portfolioSubtitle text-center mb-5">
                    <h2 className='fw-bolder'>PORTFOLIO</h2>
                    <div className="potfolioIcon text-center">
                        <i className="fa-solid fa-star fa-2x ms-2 me-2"></i>
                    </div>
                </div>

                <div className="row g-5">
                    <PortfolioImage imgSrc ={CabinImg} modalTitle="LOG CABIN"/>
                    <PortfolioImage imgSrc ={CakeImg} modalTitle="TASTY CAKE"/>
                    <PortfolioImage imgSrc ={CircusImg}/>
                    <PortfolioImage imgSrc ={GameImg}/>
                    <PortfolioImage imgSrc ={SafeImg}/>
                    <PortfolioImage imgSrc ={SubmarineImg}/>

                    {/* <div className="col-12 col-md-6 col-lg-4">
                        <div className="portfolioItem">

                        </div>
                    </div> */}

                    



                </div>

            </div>
        </div>
    }
}

export default Portfolio;
