import React, { useEffect } from 'react';
import {
  FaDocker, FaAws, FaLinux, FaGit, FaPython, FaTools, FaReact,
} from 'react-icons/fa';
import { SiKubernetes, SiTerraform } from 'react-icons/si';
import './Skills.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillIcons = [
  <FaReact key="react" color="#61DBFB" />,
  <FaDocker key="docker" color="#0db7ed" />,
  <SiKubernetes key="k8s" color="#326ce5" />,
  <SiTerraform key="terraform" color="#623ce4" />,
  <FaAws key="aws" color="#ff9900" />,
  <FaLinux key="linux" color="#333" />,
  <FaGit key="git" color="#f1502f" />,
  <FaTools key="cicd" color="#29b6f6" />,
  <FaPython key="python" color="#306998" />,
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView, controls]);

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.div
        className="skills-box"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <ul className="skill-list">
          {skillIcons.map((icon, index) => (
            <motion.li
              key={index}
              className="skill-icon"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;
