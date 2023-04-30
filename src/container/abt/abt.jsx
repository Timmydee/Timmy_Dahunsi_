import React from 'react'
import './About.scss'
import port from '../../assets/port.webp'

const About = () => {
  return (
    <div className='about' id='about'>
        <div className='about__container'>
            <h2 className="sub-text"><span>About</span></h2>
            {/* <hr/> */}

            <div className='about__col'>
                <div className=''>
                  <p className='about__text'>
                    I am a full stack web developer with a passion for creating beautiful
                    and functional websites. I have a background in technical writing and
                    have worked in the tech industry for over 10 years. I am a self-taught
                    developer who is always looking to learn new skills and technologies.
                    I am currently looking for a full-time position as a web developer.
                  </p>
                </div>

                <div className='about__col2'>
                  <div className='image__col'>
                    <img src={port} alt='' className='image' /> 
                  </div> 
                  <div className='image__border'/>
                </div>

                
                
            </div>
        </div>
    </div>
  )
}

export default About