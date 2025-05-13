import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      name: 'CI/CD Pipeline for Kubernetes Deployment',
      tools: ['Jenkins', 'EC2', 'Docker', 'GitHub', 'Trivy', 'ArgoCD', 'EKS', 'SonarQube', 'AWS'],
      desc: 'Built a CI/CD pipeline on AWS EKS using Jenkins with SonarQube and ArgoCD.',
      features: [
        '✅ Automated EKS provisioning with eksctl',
        '✅ Integrated SonarQube for code quality checks',
        '✅ Used ArgoCD for GitOps-based deployments',
        '✅ Added Trivy for container image scanning',
        '✅ Improved deployment speed and reliability',
      ],
      live: '',
      github: 'https://github.com/your-username/k8s-cicd-pipeline',
    },
    // {
    //   name: 'AWS Infra Setup',
    //   tools: ['Terraform', 'EC2', 'VPC'],
    //   desc: 'Provisioned infrastructure using Terraform with a multi-AZ setup.',
    //   features: [
    //     '✅ Multi-AZ architecture for high availability',
    //     '✅ Automated EC2, VPC, and subnets setup',
    //     '✅ Reusable infrastructure modules',
    //   ],
    //   live: '',
    //   github: 'https://github.com/your-username/aws-infra-terraform',
    // },
    {
      name: 'Terraform AWS NGINX EC2 Deployment',
      tools: ['EC2', 'NodeJS', 'Terraform', 'NGINX', 'Bash', 'AWS'],
      desc: 'Automated EC2 provisioning and NGINX deployment using Terraform and user data scripts.',
      features: [
        '✅ Provisioned AWS EC2 instances using Terraform',
        '✅ Configured custom VPC with security groups for HTTP/SSH',
        '✅ Installed and served NGINX using user-data on boot',
      ],
      live: '',
      github: 'https://github.com/your-username/terraform-nginx-ec2-deploy',
    },
    {
      name: 'Node.js and MongoDB App on Kubernetes',
      tools: ['Kubernetes', 'Docker', 'Node.js', 'MongoDB', 'Bash'],
      desc: 'Deployed a full-stack Node.js CRUD app on Kubernetes with MongoDB and Docker.',
      features: [
        '✅ Built a containerized Node.js + MongoDB REST API',
        '✅ Deployed on Kubernetes for scalability',
        '✅ Achieved environment portability with Docker',
      ],
      live: '',
      github: 'https://github.com/your-username/node-mongo-k8s-app',
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((p, index) => (
          <motion.div
            className="project-card"
            key={p.name}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{p.name}</h3>
            <p className="desc">{p.desc}</p>
            <p><strong>🛠 Tools:</strong> {p.tools.join(', ')}</p>

            <div className="project-links">
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {/* {p.github && (
                // <a href={p.github} target="_blank" rel="noopener noreferrer">
                //   <FaGithub /> GitHub
                // </a>
              )} */}
            </div>

            <motion.div
              className="project-details"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <ul>
                {p.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
