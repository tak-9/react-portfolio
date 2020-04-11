import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
    return(      
        <div>
            <Header whiteBar={true} />
            <section className="page-section bg-secondary mt-n5 mb-n5" id="contact" style={{"minHeight":"100vh"}}>
            <div className="container">
                <div className="row pt-5 justify-content-center">
                <div className="col-lg-8 text-center">
                    <h2 className="text-white mt-0">Let's Get In Touch!</h2>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-2">Ready to start your next project with me? <br/>
                    Give me a call or send me an email and I will get back to you as soon as possible!</p>
                </div>
                </div>
                <div className="row text-dark">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                    <i className="fa fa-phone fa-4x mb-3" />
                    <div>0423-307-634</div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                    <a className="icon" href="mailto:takuji.okubo@gmail.com">
                        <i className="fa fa-envelope fa-4x mb-3" />
                        <div className="text-dark d-block">takuji.okubo@gmail.com</div></a>
                    </div>
                </div>
                <div className="icon col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                    <a className="icon" href="https://github.com/tak-9" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github fa-4x mb-3" />
                        <div className="text-dark d-block">Github</div></a>
                    </div>
                </div>
                <div className="icon col-lg-3 col-md-6 text-center">
                    <div className="mt-5">
                    <a className="icon" href="https://www.linkedin.com/in/takuji-o-85ba94191/" target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin-square fa-4x mb-3" />
                        <div className="text-dark d-block">LinkedIn</div></a>
                    </div>
                </div>
                </div>
            </div>
            </section>
            <Footer fixed={true}/>
        </div>
        )
}

export default Contact;
