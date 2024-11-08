import React from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiWebflow, SiWordpress, SiNextdotjs, SiReactos, SiGit } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Webflow", icon: <SiWebflow /> },
  { name: "WordPress", icon: <SiWordpress /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "React Native", icon: <SiReactos /> },
  { name: "Git", icon: <FaGitAlt /> },
];

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <motion.h2
        className="skills__title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="skills__grid">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill__card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="skill__icon">{skill.icon}</div>
            <p className="skill__name">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
