import React from 'react';
import "./Skills.css";
import AppDesign from "../../../img/app-design.png";
import websiteDesign from "../../../img/website-design.png";
import UiDesign from "../../../img/ui-design.png";
import { Link } from 'react-scroll';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I Do</span>
      <span className='skillDesc'>I have a deep passion for technology and am fully engaged in the dynamic realm of web design and programming. My primary focus revolves around essential technologies such as HTML, CSS, and JavaScript, which I utilize to breathe life into creative and functional web projects.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UiDesign} alt='UiDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Web Design and Layout</h2>
            <p>I specialize in creating captivating and functional visual experiences that deeply engage users. By developing interactive and dynamic applications, I strive to deliver remarkable experiences that leave a lasting impact..</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={websiteDesign} alt='websiteDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Front-End Development with React</h2>
            <p>I immerse myself in the realm of front-end development, leveraging the power of React. This dynamic framework empowers me to transform ideas into reality and forge cutting-edge web products that push the boundaries of innovation..</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Experience in Python and SQL</h2>
            <p>With extensive expertise in Python, SQL, and RESTful API development, I possess a comprehensive skill set in both front-end and back-end technologies. This allows me to create efficient systems, manipulate data, and seamlessly integrate various software components, resulting in robust and functional web applications.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={AppDesign} alt='AppDesign' className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Scrum Master </h2>
            <p>In addition to my passion for front-end design and development, I'm also certified Professional Scrum Master(PSM-1). Additionally I'm six sigma certified too.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;