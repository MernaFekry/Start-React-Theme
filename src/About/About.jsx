import React, { Component } from 'react';

class About extends Component {
    render() {
        return <div className="aboutContainer p-5" id='About'>
            <div className="container aboutInnerContainer text-white d-flex flex-column align-items-center justify-content-center p-5">

            <div className="row aboutSubtitle text-center mb-5">
                <h2 className='fw-bolder'>ABOUT</h2>
                <div className="aboutIcon">
                    <i className="fa-solid fa-star fa-2x ms-2 me-2"></i>
                </div>
            </div>

            <div className="row">


                <div className="col-lg-6">
                    <div className="aboutItem">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>


                <div className="col-lg-6">
                    <div className="aboutItem">
                        <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                    </div>
                </div>

                

            </div>



            </div>
        </div>
        
        
        // <div className='container-fluid aboutContainer text-white d-flex flex-column align-items-center justify-content-center p-5'>
        //         <div className="aboutInnerContainer">
        //         <div className="row aboutSubtitle text-center mb-5">
        //             <h2>ABOUT</h2>
        //         </div>
        //         <div className="row">
        //             <div className="col-lg-6">
        //                 <div className="aboutItem">
        //                     <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        //                 </div>
        //             </div>
        //             <div className="col-lg-6">
        //                 <div className="aboutItem">
        //                     <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
        //                 </div>
        //             </div>
        //         </div>
        //         </div>
               
        //     </div>
        
    }
}

export default About;
