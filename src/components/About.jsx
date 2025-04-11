import React from "react";
import { motion } from "framer-motion";
import "./about.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial="hidden"
        whileInView="show"
        variants={containerVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p className="about-text" variants={paragraphVariants}>
          Hello! I'm <strong>Jaypal Singh Sisodiya</strong>, a final-year Computer Science student and a passionate <strong>DevOps & Cloud enthusiast</strong>.
        </motion.p>

        <motion.p className="about-text" variants={paragraphVariants}>
          I have hands-on experience with AWS and proficiency in tools like <strong>Linux, Git, GitHub, Docker, Jenkins, Terraform, and Python</strong>.
        </motion.p>

        <motion.p className="about-text" variants={paragraphVariants}>
          Currently, I’m expanding my skills in <strong>Kubernetes, Ansible</strong>, and infrastructure automation to build scalable systems.
        </motion.p>

        <motion.p className="about-text" variants={paragraphVariants}>
          Through my projects, I’ve gained practical knowledge of <strong>DevOps environments, CI/CD pipelines</strong>, and real-world deployment processes.
        </motion.p>

        <motion.p className="about-text" variants={paragraphVariants}>
          I also have basic knowledge of <strong>front-end development</strong>, enabling me to understand full-stack workflows and collaborate effectively.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
