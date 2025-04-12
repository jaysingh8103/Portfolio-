import React from "react";
import { motion } from "framer-motion";
import {
  SiDocker,
  SiJenkins,
  SiKubernetes,
  SiTerraform,
  SiGithub,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiHelm,
} from "react-icons/si";
import {
  FaAws,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaGithub as FaGit,
} from "react-icons/fa";
import "./Intro.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const devopsIcons = [
  SiDocker,
  SiJenkins,
  SiKubernetes,
  FaAws,
  SiTerraform,
  SiGithub,
  SiAnsible,
  SiPrometheus,
  SiGrafana,
  SiHelm,
];

const iconColors = [
  "#2496ED",
  "#D24939",
  "#326CE5",
  "#FF9900",
  "#623CE4",
  "#181717",
  "#EE0000",
  "#E6522C",
  "#F46800",
  "#277A9F",
];

const Intro = () => {
  return (
    <motion.section
      id="intro"
      className="intro"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Floating Icons Background */}
      <div className="intro-bg">
        <ul className="icons">
          {devopsIcons.map((Icon, index) => (
            <li
              key={index}
              className="icon-float"
              style={{ color: iconColors[index] }}
            >
              <Icon size={40} />
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="intro-content">
        <motion.div className="profile-wrapper" whileHover={{ scale: 1.05 }}>
          <img
            src="/assets/pro-2.jpg"
            alt="Profile"
            className="profile-pic"
            onError={(e) => (e.target.style.display = "none")}
          />
        </motion.div>

        <motion.div className="intro-text" variants={itemVariants}>
          <motion.h1 variants={itemVariants} className="intro-name">
            Hi, I'm{" "}
            <span className="highlighted-name">Jaypal Singh Sisodiya</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="typing-effect">
            Cloud & DevOps learner | Passionate about scalable and secure
            deployments
          </motion.p>

          <motion.div className="intro-buttons" variants={itemVariants}>
            <motion.a
              href="https://portfolio-jaypal.onrender.com/download-cv"
              className="intro-btn"
              whileHover={{ scale: 1.1 }}
            >
              📄 Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="intro-btn secondary"
              whileHover={{ scale: 1.1 }}
            >
              📬 Contact Me
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div className="social-icons" variants={itemVariants}>
            <a
              href="https://github.com/jaysingh8103"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGit className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/jaypal-singh-sisodiya-6148a5250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a href="mailto:jaypals840@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Intro;
