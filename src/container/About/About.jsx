import React from 'react';
import './About.scss';
import port from '../../assets/port.webp';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__container">
        <h2 className="sub-text">
          <span>About</span>
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
              Hi! I'm Dahunsi Timilehin, a frontend developer dedicated to creating stunning web and mobile apps. With 18 months' experience and product management expertise, I design user-focused digital solutions that drive growth. Skilled in React, JavaScript, HTML, CSS, React Native, and Next.js, I stay current with industry trends. My problem-solving and communication abilities ensure timely delivery and client satisfaction. Let's connect and bring your project to life with a touch of innovation
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default About;
