import React, { Component } from 'react';

class NabBar extends Component {
    render() {
        return <div>
                <nav class="navbar navbar-expand-lg fixed-top px-5 py-3">
                    <div class="container px-5">
                        <a class="navbar-brand text-white fw-bolder" href="#">START REACT</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item me-2 rounded-start rounded-end">
                                    <a class="nav-link active text-white fw-bolder rounded-start rounded-end" aria-current="page" href="#Portfolio">PORTFOLIO</a>
                                </li>
                                <li class="nav-item me-2 rounded-start rounded-end">
                                    <a class="nav-link text-white fw-bolder rounded-start rounded-end" href="#About">ABOUT</a>
                                </li>
                                <li class="nav-item me-2 rounded-start rounded-end">
                                    <a class="nav-link text-white fw-bolder rounded-start rounded-end" href="#Contact">CONTACT</a>
                                </li>
                                
                                
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        
    }
}

export default NabBar;
