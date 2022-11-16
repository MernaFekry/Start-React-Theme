import React, { Component } from 'react';


class PortfolioImage extends Component {
    render() {
        return <div className="col-12 col-md-6 col-lg-4 PortfolioImage">
                        <div className="portfolioItem" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="imgLayer rounded-start rounded-end ">
                                <a href=""  data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa-solid fa-plus text-white fa-10x "></i></a>

                                
                            </div>
                            <img src={this.props.imgSrc}  className="w-100 rounded-start rounded-end" alt="Portfolio" />
                            
                            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content p-5">
                                    <div class=" d-flex justify-content-between align-items-center">
                                        <h2 className='text-center'>{this.props.modalTitle}</h2>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="my-3">
                                    <img src={this.props.imgSrc}  className="w-100 rounded-start rounded-end" alt="Portfolio" />
                                        
                                    </div>
                                    <div className="">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                        
                                    </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                </div>
    }
}

export default PortfolioImage;