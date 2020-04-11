import React from 'react';
import Header from './Header';
import Footer from './Footer';

function About() {
    return(
        <div>
            <Header whiteBar={true} />
            <section className="page-section bg-primary  mt-n5 mb-n5" id="about" style={{"minHeight":"100vh"}}>
            <div className="container">
                <div className="row mt-5 justify-content-center">
                <div className="col-lg-9 text-center">
                    <h2 className="text-white mt-0">About</h2>
                    <hr className="divider light my-4" />
                    <p className="text-white-50 mb-4">
                    An IT engineer in Sydney with a total of 19 years of experience in various roles as a Java developer tester, 
                    Support engineer, Unix administrator and Technical translator.
                    </p>
                    <p className="text-white-50 mb-4">
                    Worked for some of the largest IT companies in the world. 
                    Tested and developed new features of Glassfish which is an open source Java EE application server.  
                    Fixed bugs and suggested solutions to the open source developers. 
                    </p>
                    <p className="text-white-50 mb-4">
                    Represented a team of three developers from Sydney and liaised with a large overseas development team using the Japanese language skill. 
                    Communicated effectively with Australian team members and Japanese customers using bilingual skill to deliver product on time with tight schedule.
                    </p>
                    <p className="text-white-50 mb-4">
                    Passionate about learning new technologies. In order to update skills with the latest full stack Web development technologies, 
                    currently undertaking 24 weeks of intensive course, Coding Boot Camp, at the University of Sydney. 
                    </p>
                    <a className="btn btn-light btn-xl" href="https://drive.google.com/open?id=12fbGO6GQBHAPG0pMpqKkDTUwXYbAoCSE" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o" style={{fontSize: 20}} /> &nbsp; Resume</a>
                </div>
                </div>
            </div>
            </section>
            <Footer fixed={true} />
        </div>
        )
}

export default About;
