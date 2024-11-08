import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { fadeInUp, container } from "../../component/animation/animate";

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
        Building Engaging Websites that Drive Growth and Results
        </motion.h1>
        <motion.p className="hero__subheadline pSub-text" variants={fadeInUp}>
          {/* I am Dahunsi Timilehin, I help startups, companies, and entrepreneurs establish a powerful online presence with seamless, responsive, and scalable websites. */}
          {/* I build websites that make a lasting impression and help your business
          grow. From clean designs to smooth performance, I bring your vision to
          life with a site that    drives results and supports your goals */}
          As an experienced frontend engineer, I build websites designed to
          captivate your audience and drive growth. From sleek interfaces to
          optimized functionality, I bring your vision to life with a site that
          drives results and supports your goals.
        </motion.p>
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
