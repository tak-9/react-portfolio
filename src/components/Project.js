import React from 'react';

function Project(props) {
    // projectName, projectSubDescription, screenCapture, projectDescription, demoUrl, gitHubUrl,  
    return (
        <div className="col-lg-4 col-sm-6">
            <div className="card shadow">
                <a href={props.demoUrl} className="portfolio-box" target="_blank" rel="noopener noreferrer">
                    <img src={props.screenCapture} className="card-img-top" alt="screen capture" />
                    <div className="portfolio-box-caption">
                        <div className="project-category text-white-50">{props.projectSubDescription}</div>
                        <div className="project-name">{props.projectName}</div>
                    </div>
                </a>
                <div className="card-body">
                    <h4 className="card-title"><a href={props.gitHubUrl} target="_blank" rel="noopener noreferrer">{props.projectName}</a></h4>
                    <p/>{props.projectDescription}<p/>
                        <a href={props.gitHubUrl} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Github repo</a> &nbsp;
                        <a href={props.demoUrl} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                </div>
            </div>
        </div>

      );
}
 
export default Project;