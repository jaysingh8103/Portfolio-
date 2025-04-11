import React from 'react';
import './Experience.css';
import { FaTools, FaAws, FaPython } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experienceData = [
  {
    role: "Python Developer Intern",
    company: "HDFC Bank | IT / Computers - Software",
    description: (
      <>
        <p>- Automate with Python: Write scripts to automate tasks and processes.</p>
        <p>- Integrate Jenkins: Set up and manage CI/CD pipelines with Jenkins.</p>
        <p>- Learn DevOps: Gain experience in Python, Jenkins, and DevOps workflows.</p>
      </>
    ),
    skills: [
      <FaPython key="python" className="icon python" />,
      <FaTools key="jenkins" className="icon jenkins" />,
      <FaAws key="aws" className="icon aws" />,
    ],
    year: "28 Feb, 2025 - Present",
  },
];

const fadeZoomIn = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const Experience = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section id="experience" className="experience">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="timeline" ref={ref}>
        <div className="vertical-line" />
        {experienceData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            variants={fadeZoomIn}
            initial="hidden"
            animate={controls}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="content-left">
                <h3>{item.role}</h3>
                <h4 className="company-name">@ {item.company}</h4>
                <span className="year">{item.year}</span>
                <div className="description">{item.description}</div>
              </div>
              <div className="skill-icons">
                {item.skills.map((icon, idx) => (
                  <span key={idx} className="skill-icon">{icon}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
