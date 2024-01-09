import React from 'react';
import me from "../../../img/mee.png";
import btnImg from "../../../img/hireme.png"
import linkedin from "../../../img/linkedin.png"
import github from "../../../img/github.png"
import { Link } from 'react-scroll'
import "./Intro.css"

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='Hello'>Hello,</span>
        <span className='introText'>
          I'm <span className='introName'>Meenakshi</span><br/>
          A Junior Programmer capable of doing <br/>amazing things
        </span>
        <p className='introPara'>
          With experience in Digital Transformation and HR,<br/>
          I have always had a deep fascination for technology and the<br/>
          digital world. In my new stage as a junior programmer, I am<br/>
          determined to showcase my passion and skills by creating impactful<br/>
          and innovative solutions. I am ready to face any challenge and<br/>
          continue surprising the world with my achievements.
        </p>
        <a href="https://www.resumonk.com/users/920588-connectgauravchauhan/resumes/1721898/preview?screen=resume" download="My_Resume.pdf">
          <button className='btn'><img src={btnImg} alt='btn' /> View my resume</button>
        </a>
      </div>
      <img src={me} alt='Profile' className="bg" />
    </section>
  );
};

export default Intro;