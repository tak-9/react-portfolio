import React from 'react';
import { Link } from "react-router-dom";

function Navbar(props) {
    var whiteBar = props.whiteBar;
    return(
        <nav style={{
            backgroundColor: whiteBar ? '#e6e6e6' : '' , 
            boxShadow: whiteBar ? '0 0.5rem 1rem rgba(0, 0, 0, 0.15)':''}
            } 
            className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
            
            <div className="container">
                <Link to="/" className="navbar-brand js-scroll-trigger">Takuji Okubo</Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link js-scroll-trigger">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/portfolio" className="nav-link js-scroll-trigger">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-link js-scroll-trigger">Contact</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;