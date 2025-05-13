import React from 'react';
import './Education.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    institute: "Medi-Caps University , Indore",
    duration: "2021 - 2025",
    degree: "B.Tech. - Computer Science & Engineering",
    score: "CGPA: 7.8 / 10",
  },
  {
    institute: "Narmada Valley Int’l School, Barwaha",
    duration: "2021",
    degree: "12th | CBSE  (PCM)" ,
    score: "Percentage: 77%",
  },
  {
    institute: "Narmada Valley Int’l School, Barwaha",
    duration: "2019",
    degree: "10th | CBSE",
    score: "Percentage: 72%",
  },
];

const Education = () => {
  return (
    <section id="education" className="edu-section">
      <motion.h2
        className="edu-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
         Education 
      </motion.h2>

      <div className="edu-timeline">
        {educationData.map((edu, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

          return (
            <motion.div
              key={index}
              className="edu-block"
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="edu-dot" />
              <div className="edu-card">
                <h3>{edu.institute}</h3>
                <span className="duration">{edu.duration}</span>
                <p>{edu.degree}</p>
                <p className="score">{edu.score}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
