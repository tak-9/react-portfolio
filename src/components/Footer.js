import React from 'react';
function Footer(props) {
    return(
        <footer className="bg-dark text-white py-5 { props.fixed ? fixed-bottom: ''}" >
            <div className="container">
                <div className="small text-center text-muted">Photo taken by Takuji Okubo &copy; 2020 &nbsp;&nbsp;  HTML, CSS from Start Bootstrap and modified by Takuji Okubo</div>
            </div>
        </footer>
    )
}

export default Footer;
