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
import { FaAws } from "react-icons/fa";
import "./Intro.css";

import {
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

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
  "#2496ED", // Docker
  "#D24939", // Jenkins
  "#326CE5", // Kubernetes
  "#FF9900", // AWS
  "#623CE4", // Terraform
  "#181717", // GitHub
  "#EE0000", // Ansible
  "#E6522C", // Prometheus
  "#F46800", // Grafana
  "#277A9F", // Helm
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
      {/* Animated Background */}
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
          <img src="/assets/devops.png" alt="DevOps" className="profile-pic" />
        </motion.div>

        <motion.div className="intro-text" variants={itemVariants}>
          <motion.h1 variants={itemVariants} className="intro-name">
            Hi, I'm{" "}
            <span className="highlighted-name">Jaypal Singh Sisodiya</span>
          </motion.h1>

          <motion.p variants={itemVariants}>
            Building scalable, secure infrastructure with Terraform, Docker,
            Jenkins & AWS.
          </motion.p>

          <motion.div className="intro-buttons" variants={itemVariants}>
            <motion.a
              href="/assets/Jaypal_Singh.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="intro-btn"
              whileHover={{ scale: 1.1 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="intro-btn secondary"
              whileHover={{ scale: 1.1 }}
            >
              Contact Me
            </motion.a>
          </motion.div>
          <motion.div className="social-icons" variants={itemVariants}>
            <a
              href="https://github.com/jaysingh8103"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="www.linkedin.com/in/jaypal-singh-sisodiya-6148a5250"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a href="jaypals840@gmail.com">
              <FaEnvelope className="social-icon" />
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="/"
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
