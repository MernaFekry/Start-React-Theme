import React, { Component } from 'react';
import '../App.css';
// import cabinImage from './images/cabin.png';
// import cakeImage from 'cake.png';
// import  circusImage from 'circus.png';
// import  gameImage from 'game.png';
// import safeImage  from 'safe.png';
// import  submarineImage from 'submarine.png';
import avatarImage  from '../images/avataaars.svg';

class Header extends Component {
    render() {
        return <div className='container-fluid headerContainer text-center text-white d-flex flex-column align-items-center justify-content-center'>
            <div className="row headerRow ">
                <img src={avatarImage} className="" alt="Developer Image" />
                <h1 className='mt-3 fw-bolder'>START REACT</h1>
                <div className="starIcon headerIcon text-center my-4">
                    <i className="fa-solid fa-star fa-2x ms-2 me-2"></i>
                </div>
            {/* <div className="starIcon">
                <i class="fa-solid fa-star"></i>
            </div> */}
                <h4>Graphic Artist - Web Designer - Illustrator</h4>
            </div>
        </div>
        
        // <div className='w-25 d-flex flex-column align-items-center justify-content-center bg-danger'>

        // <img src={avatarImage} className="w-100" alt="Developer Image" />
        // <h1>START REACT</h1>
        // <p>Graphic Artist - Web Designer - Illustrator</p>
        // </div>
    }
}

export default Header;