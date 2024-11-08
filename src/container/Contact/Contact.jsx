import React from "react";
import "./Contact.scss";
import { motion } from "framer-motion";
import {
  AiOutlineMail,
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
} from "react-icons/ai";

const Contact = () => {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="contact__container">
        <h3 className="sub-text">
          Ready to take your digital presence to the next level
        </h3>
        <p className="p pSub-text">
          Reach out to me today and let's discuss how I can help you achieve your goals.
        </p>

        <a
          href={`mailto:dahunsitimmy@gmail.com`}
          className="hero__button hero__button--primary"
        >
          Let's get in touch
          <AiOutlineMail size={24} />
        </a>

        <div className="contact__social-icons">
          <motion.a
            href="https://twitter.com/Timmy_Dahunsi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineTwitter size={28} />
          </motion.a>
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
            href="https://wa.me/09071268591" // Replace with actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <AiOutlineWhatsApp size={28} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
