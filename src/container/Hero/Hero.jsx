import React from 'react'
import './Hero.scss'
import {motion} from 'framer-motion'
import {BiChevronsDown} from 'react-icons/bi'

const Hero = () => {
  return (
    <div className='hero'>
        
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.2 }}
        className="hero__container"
      >
        <span>Hi, My name is,</span>
        <h1 className='h-text'>
            Dahunsi Timilehin <br/>Software Developer 👨🏽‍💻 | Technical Writer  
            {/* Dahunsi Timilehin, <br/>I <span>Build Products</span> on the web            */}
        </h1>
        <p className='pSub-text'>I’m a software engineer specializing in building Products and exceptional digital  experiences on the web</p>
        <a href={`mailto:dahunsitimmy@gmail.com`}>
          <button className='btn'>Get In Touch </button>
        </a>
      </motion.div>

      <div className='down vibrate-1'>
        <div className='subDown'>
          <BiChevronsDown className='downIcon'/>
        </div>
      </div>
     
    </div>
  )
}

export default Hero