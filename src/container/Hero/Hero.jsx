import React from 'react';
import './Hero.scss';
import { motion } from 'framer-motion';
import { fadeInUp, container } from '../../component/animation/animate';
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
  AiOutlineGithub,
} from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <motion.section
        initial="initial"
        animate="animate"
        exit="exit"
        variants={container}
        className="hero__container"
      >
        <motion.h1 className="hero__headline h-text" variants={fadeInUp}>
          Building Web Experiences that Drive Growth
        </motion.h1>
        <motion.p className="hero__subheadline pSub-text" variants={fadeInUp}>
          I’m a Frontend Engineer who loves turning ideas into clean, responsive, and high-performing web experiences that help products grow and connect with their users.
        </motion.p>
        <motion.div className="social-icons">
          <motion.a
            href="https://www.linkedin.com/in/timilehin-dahunsi-598010176/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineLinkedin size={28} />
          </motion.a>
          <motion.a
            href="https://github.com/Timmydee/" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineGithub size={28} />
          </motion.a>
          <motion.a
            href="https://twitter.com/Timmy_Dahunsi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineTwitter size={28} />
          </motion.a>
        </motion.div>
        <motion.div variants={fadeInUp} className="hero__cta-buttons">
          <a href="#contact">
            <button className="hero__button hero__button--primary">
              Get Started Today
            </button>
          </a>
          <a href="#work">
            <button className="hero__button hero__button--secondary">
              Explore My Work
            </button>
          </a>
        </motion.div>
        <motion.p className="hero__supporting-text" variants={fadeInUp}>
          {/* As an experienced frontend engineer, I build websites designed to captivate your audience and drive growth. From sleek interfaces to optimized functionality, I turn your vision into a site that works hard for you. */}
        </motion.p>
      </motion.section>
    </div>
  );
};

export default Hero;
