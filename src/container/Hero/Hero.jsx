import React from 'react'
import './Hero.scss'
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <div className='hero'>
        
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.2 }}
        className="hero__container"
      >
        <span>Hi there,</span>
        <h1 className='h-text'>
            I'm Dahunsi Timilehin, <br/>I <span>Build Products</span> on the web           
        </h1>
        <p className='p-text'>I am a creative Web developer Passionate about converting web into Products</p>
      </motion.div>
    </div>
  )
}

export default Hero