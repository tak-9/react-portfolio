import React from 'react';
import { Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Home() {
    return(
        <div>
            <Header/>        
            <header className="masthead">
            <div className="container h-100">
                <div className="row h-100 align-items-center justify-content-center text-center">
                <div className="col-lg-10 align-self-end">
                    <h1 className="text-uppercase text-white font-weight-bold">Takuji Okubo</h1>
                    <hr className="divider my-4" />
                </div>
                <div className="col-lg-8 align-self-baseline">
                    <p className="text-white-75 font-weight-light mb-5">An IT engineer in Sydney with experience in various roles such as a Java developer, Support engineer, Unix administrator and Technical translator.</p>
                    <Link to="/portfolio" className="btn btn-primary btn-xl js-scroll-trigger" >Find out more</Link>
                </div>
                </div>
            </div>
            </header>
            <Footer fixed={false} />
        </div>
    )
}

export default Home;