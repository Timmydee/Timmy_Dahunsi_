// import React from "react";
// import "./About.scss";
// import { motion } from "framer-motion";
// import port from "../../assets/port.webp";
// import { FaLaptopCode, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";

// const About = () => {
//   const cards = [
//     {
//       icon: <FaLaptopCode />,
//       title: "Custom, Impactful Design",
//       text: "Engaging websites that align with your brand and business goals, creating a seamless experience for every visitor.",
//     },
//     {
//       icon: <FaChartLine />,
//       title: "Proven Expertise",
//       text: "Skilled in React, React Native, and Next.js, I build fast, responsive, and scalable solutions for growing businesses.",
//     },
//     {
//       icon: <FaUsers />,
//       title: "Reliable Communication",
//       text: "Clear and collaborative approach, keeping you informed every step of the way to bring your vision to life.",
//     },
//     {
//       icon: <FaHandshake />,
//       title: "Proven Track Record of Success",
//       text: "I’ve consistently achieved a 100% completion rate, seeing every project through to launch without delays. ",
//     },
//   ];

//   return (
//     <div className="about" id="about">
//       <div className="about__container">
//         <motion.h2
//           className="sub-text about__title"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//         >
//           <span>Why Work with Me</span>
//         </motion.h2>

//         <div className="about__content">
//           {/* Image Section */}
//           <motion.div
//             className="about__image"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//           >
//             <img src={port} alt="Timilehin Dahunsi" className="about__img" />
//           </motion.div>

//           {/* Cards Section */}
//           <div className="about__cards">
//             {cards.map((card, index) => (
//               <motion.div
//                 key={index}
//                 className="about__card"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <div className="about__icon">{card.icon}</div>
//                 <h3 className="about__card-title">{card.title}</h3>
//                 <p className="about__card-text">{card.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from 'react';
import './About.scss';

import port from '../../assets/port.webp';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <h2 className="sub-text">
          <span>Why work with me</span>
        </h2>

        <div className="about__col">
          <div className="about__col2">
            <div className="image__col">
              <img src={port} alt="About" className="image" />
              {/* <div className="image__border" /> */}
            </div>
          </div>
          <div className="about__text-wrapper">
            <p className="about__text">
              I’m Timilehin, a Frontend Engineer passionate about building web
              experiences that balance design, performance, and purpose. Over
              the past few years, I’ve worked across industries like HR Tech,
              E-commerce, Sustainable Energy, AI, and Tech Agencies, helping
              teams create products that connect people, drive growth, and
              deliver meaningful impact.
              <br></br>I bring more than just technical skills to every project
              , I bring curiosity, reliability, and a genuine desire to see
              products succeed. With hands-on experience building responsive and
              performance-driven applications using React and Next.js, I focus
              on creating experiences that feel effortless for users and
              effective for teams.
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
