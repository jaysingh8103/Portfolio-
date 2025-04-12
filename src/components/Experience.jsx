import React from 'react';
import './Experience.css';
import { FaTools, FaAws, FaPython } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experienceData = [
  {
    role: "Python Developer Intern",
    company: "HDFC Bank | Remote",
    description: (
      <>
        <p>- Built an automated code optimization and error detection tool using Python to improve code quality and reduce manual effort.</p>
        <p>- Gained practical experience with AWS, exploring cloud infrastructure and deployment concepts.</p>
        <p>- Strengthened understanding of DevOps principles including CI/CD, containerization, and infrastructure automation.</p>
        <p>- Started writing shell and Python scripts to automate routine tasks and system operations, improving internal tool reliability.</p>
      </>
    ),
    // skills: [
    //   <FaPython key="python" className="icon python" />,
    //   <FaTools key="jenkins" className="icon jenkins" />,
    //   <FaAws key="aws" className="icon aws" />,
    // ],
    year: "15 Jan, 2025 - Present",
  },
  {
    role: "Cybersecurity & Network Intern",
    company: "Palo Alto Networks | On-Site",
    description: (
      <>
        <p>- Gained foundational knowledge in cybersecurity and networking, including threat prevention and firewall fundamentals.</p>
        <p>- Hands-on experience in security tools, real-world use cases, and network infrastructure concepts.</p>
      </>
    ),
    // skills: [
    //   <FaTools key="cyber" className="icon jenkins" />, // You can replace icon if needed
    // ],
    year: "June 2024 - July 2024",
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
              {/* <div className="skill-icons">
                {item.skills.map((icon, idx) => (
                  <span key={idx} className="skill-icon">{icon}</span>
                ))}
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
