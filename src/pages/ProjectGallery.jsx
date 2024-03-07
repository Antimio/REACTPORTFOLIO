import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import image1 from './images/CalorieLol.png';
import image2 from './images/DailyPlanner.png';
import image3 from './images/HTML technical-team page generator.png';
import image4 from './images/JavascriptQuiz.png';
import image5 from './images/PasswordGenerator.png';


const project = [
    { name: "CalorieLol", image: image1, link: "https://github.com/rhipsime/cariLOL" },
    { name: "DailyPlanner", image: image2 , link: "https://github.com/Antimio/Daily-Planner-Challenge" },
    { name: "HTML technical-team page generator", image: image3, link: "https://github.com/Antimio/teamProfileGenerator" },
    { name: "JavascriptQuiz", image: image4, link: "https://github.com/Antimio/Javascript-Quiz" },
    { name: "PasswordGenerator", image: image5, link: "https://github.com/Antimio/Password-Generator-Assignment" }
  ];

  function ProjectGallery(){
    return(
        <div className="container mt-5">
            <div className="row">
                {project.map((project, index) => (
                    <div key={index} className={`col-12 ${index !== 0 && "col-md-6"}`}>
                        <div className="project-item">
                            <img src={project.image} alt={project.name} className="img-fluid" />
                            <Link to={project.link} className="d-block text-centre mt-2">{project.name}</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
  }

  export default ProjectGallery;