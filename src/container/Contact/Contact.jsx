import React from 'react'
import './Contact.scss'
import {AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <div className="contact__container">
            <h3 className='sub-text'><span>Get In Touch</span></h3>
            <p className='p pSub-text'>I'm currently looking for new opportunities, my inbox are open. Feel free to send a Dm, I will reply as soon as i see it</p>

            <div className='contact__button'>
                <a href={`mailto:dahunsitimmy@gmail.com`} className='btn'>
                    <h4>Say Hello</h4>
                    <AiOutlineMail/>
                </a>

                <a href='https://twitter.com/timmy_dahunsi' className='btn' target="_blank" rel="noopener noreferrer">
                    <h4>Say Hello</h4>
                    <AiOutlineTwitter/>
                </a>

                <a href='https://www.linkedin.com/in/timilehin-dahunsi-598010176/' className='btn' target="_blank" rel="noopener noreferrer">
                    <h4>Say Hello</h4>
                    <AiOutlineLinkedin/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact