import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BsGithub, BsInfoCircle } from 'react-icons/bs';
import { FiExternalLink } from 'react-icons/fi';
import { FaReact, FaBootstrap } from 'react-icons/fa';
import { BiLogoCss3, BiLogoHtml5 } from 'react-icons/bi';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

import './CardProject.css'; // Importing correct CSS file

const CardProject = ({ project }) => {
  const [open, setOpen] = useState(false);

  return (
    <section className='card_container'>

      <BsInfoCircle
        className='more_info_icon'
        onClick={() => setOpen(true)}
      />

      <motion.div
        className='more_info_container'
        animate={{ y: open ? '0%' : '-100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut', type: 'spring', bounce: 0.5 }}
      >
        <h4>{project.title}</h4>
        <p>{project.long_description}</p>
        <MdKeyboardDoubleArrowUp
          className='close_icon'
          onClick={() => setOpen(false)}
        />
      </motion.div>

      <div className='img_container'>
        <img className='img' src={project.img} alt='' />
      </div>

      <div className='body_container'>
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <div className='footer_container'>
          <div className='tech_container'>
            <FaReact className='tech_icon' />
            <BiLogoCss3 className='tech_icon' />
            <FaBootstrap className='tech_icon' />
            <BiLogoHtml5 className='tech_icon' />
          </div>
          <div className='link_container'>
            <a
              className='social_icon'
              href={project.link_github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <BsGithub />
            </a>
            <a
              className='social_icon'
              href={project.link_demo}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default CardProject;
