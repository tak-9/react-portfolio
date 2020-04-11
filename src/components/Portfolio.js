import React from 'react';
import mixerupperImg from "../img/mixerupper.jpg";
import quizImg from "../img/quiz.jpg";
import weatherImg from "../img/weather.jpg";
import burgerImg from "../img/burger.png";
import employeeImg from "../img/employee.png";
import tutoringImg from "../img/tutoring.png";
import Project from './Project'
import Header from './Header';
import Footer from './Footer';

function Portfolio() {
    // projectName, projectSubDescription, screenCapture, projectDescription, demoUrl, gitHubUrl,  
    var projects = [{
            projectName:"Mixer Upper",
            projectSubDescription: "jQuery, Ajax and Google Map",
            screenCapture :mixerupperImg,
            projectDescription : (
                <span>
                    Discover and create sophisticated cocktails. Cocktails can be searched and
                    provides instructions on how to prepare it. Shows Cocktail bars in Google Map using their API.  
                    <p/>
                    <i>"Your group's project not only meets the requirements but goes beyond them. 
                    It looks quite professional and the contributions appears to be balanced among the group members. 
                    Also, great to see that your contribution in the project is all over the place including 
                    both front end and back end which makes you a polymath of your group."  Sandesh Pathak </i><p/>
                    Received A+ grade for a group work.
                </span>             
            ),                                
            demoUrl: "https://jeqp.github.io/mixer-upper/",
            gitHubUrl: "https://github.com/JEQP/mixer-upper"
        },
        {
            projectName:"Coding Quiz",
            projectSubDescription: "JavaScript and LocalStorage",
            screenCapture :quizImg,
            projectDescription : (
                <span>
                    Multiple on-line questions on Javascript and HTML. 
                    Answer the question within the specified time frame and record scores. 
                    <p/>  
                    <i>"Your user interface, design and the choice of sounds are great. "  Sandesh Pathak</i>,
                    "Received A+ grade."                 
                </span>
            ),                
            demoUrl: "https://tak-9.github.io/quiz/",
            gitHubUrl: "https://github.com/tak-9/quiz"
        }, 
        {
            projectName:"Weather Forecast",
            projectSubDescription: "jQuery and Ajax",
            screenCapture :weatherImg,
            projectDescription : (
                <span>
                    Shows weather forecast for next 5 days.
                    <p/>
                    <i>"Awesome work. I do not have any feedback
                    except that everything looks smooth and works as it should. Great job on adding all the extra
                    functionalities." Sandesh Pathak</i><p/>
                    Received A+ grade.
                </span>
            ),
            demoUrl: "https://tak-9.github.io/weather/",
            gitHubUrl: "https://github.com/tak-9/weather/"
        },
        {
            projectName:"Eat-da-burger",
            projectSubDescription: "Node.js,Express.js and Handlebars",
            screenCapture : burgerImg,
            projectDescription : (
                <span>
                    A burger logger with MySQL, Node.js, Express, Handlebars and a homemade ORM (yum!). Deployed on heroku.
                    <p/>
                    <i>"Well documented readme, and appearance looks great. All the functionalities work too. " Sandesh Pathak</i>
                    Received A+ grade.
                </span>
            ),                 
            demoUrl: "https://eat-da-burger-takuji.herokuapp.com/",
            gitHubUrl: "https://github.com/tak-9/burger"
        },
        {
            projectName:"Employee Database",
            projectSubDescription: "Node.js and MySQL",
            screenCapture : employeeImg,
            projectDescription : (
                <span>
                    A CLI application that manages Employee database. Developed with Node.js, Inquier.js, MySQL.
                    <p/>
                    Received A+ grade.
                </span>
            ),
            demoUrl: "https://github.com/tak-9/employee_db",
            gitHubUrl: "https://github.com/tak-9/employee_db"
        },
        {
            projectName: "Highschool Tutoring",
            projectSubDescription: "Node.js, ORM, MySQL, Handlebars",
            screenCapture : tutoringImg,
            projectDescription : (
                <span>
                    <i>"Project meets all the requirements and also very professional. 
                    The presentation was well done and the story behind the idea, challenges, and future goals were well articulated.  
                    It is also obvious from your commits and code that you were the most valuable member in your group and 
                    would like to commend your contribution which seems invaluable." Sandesh Pathak</i>
                    <p/>
                    Received A+ grade for a group work.
                    <p/>
                    Login using the following test users to see different view for each user type.
                    <p/>
                    <code>
                        Student ID: student@test.com, Passoword: 123 <br />
                        Staff ID: teacher@test.com, Password: 123
                    </code>
                </span>
            ),
            demoUrl: "https://proficiency.herokuapp.com/",
            gitHubUrl: "https://github.com/tak-9/project2"
        }
    ]

    var projectsRow = []; // projects up to three
    var allProjects =[]; // Array to keep projectsRow array(s)
    projects.forEach((project,i) => {
        if (i !==0 && i % 3 === 0){
            projectsRow = [];
        }
        projectsRow.push(
            (
                <Project 
                projectName = {project.projectName} 
                projectSubDescription = {project.projectSubDescription}
                screenCapture = {project.screenCapture}
                projectDescription = {project.projectDescription}
                demoUrl = {project.demoUrl} 
                gitHubUrl = {project.gitHubUrl}
                />
            )
        );
        if (i % 3 === 2 || i === (projects.length - 1)) {
            allProjects.push(projectsRow);
        }
    });

    // Insert "pt-5" and "row" every three projects
    // "pt-5" is top margin 5
    var formattedProjects = allProjects.map((threeProjects, i)=>{
        return (
            <div>
                <div className="pt-5" />
                <div className="row">
                    {threeProjects}
                </div>
            </div>
        )
    });

    return(
        <div>
            <Header whiteBar={true} />
            <section className="page-section" id="portfolio">
                <div className="container-fluid">
                    <h2 className="text-center mt-0">Portfolio</h2>
                    <hr className="divider my-4" />
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <p>
                            Here are some of the works I created for the Coding Boot Camp Sydney.<br /> 
                            Watch this space as more works will be added soon...
                            </p>
                        </div>
                    </div>
                    {formattedProjects}
                </div>
            </section>
            <Footer fixed={true}/>
        </div>
    )
}

export default Portfolio;
