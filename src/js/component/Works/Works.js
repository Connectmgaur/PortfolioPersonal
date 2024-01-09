import React, { useState } from 'react';
import './Works.css';
import tikets from '../../../img/wizzz.png';

const proyectosData = [
  {
    title: 'Koryoku-Productivity Tracker',
    long_description:
      ' ',
    img: tikets,
    link_github: '',
    link_demo: '',
  },
  // Agrega más proyectos aquí
];

const Works = () => {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const toggleDescription = (index) => {
    setSelectedProject(index);
    setShowDescription(!showDescription);
  };

  return (
    <section id="works">
      <h2 className="worksTitle">My Projects</h2>
      <div className="worksContainer">
        {proyectosData.map((proyecto, index) => (
          <div className={`project ${showDescription && selectedProject === index ? 'active' : ''}`} key={index}>
            <div className="projectCard">
              <h3>{proyecto.title}</h3>
              <div className="imgContainer" onClick={() => toggleDescription(index)}>
                <img src={proyecto.img} alt={proyecto.title} className="projectImg" />
              </div>
              <p className="project-description">{proyecto.long_description}</p>

              <div className="projectLinks">
                <a href={proyecto.link_github} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub
                </a>
                <a href={proyecto.link_demo} target="_blank" rel="noopener noreferrer" className="demo-link">
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;