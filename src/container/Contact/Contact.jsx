import React from 'react'
import './Contact.scss'
import {AiOutlineMail, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact__container">
            <h3 className='sub-text'><span>Get In Touch</span></h3>
            <p className='p pSub-text'>I'm currently looking for new opportunities, my inbox are open. Feel free to send a Dm, I will reply as soon as i see it</p>

            <div className='contact__button'>
                <div className='btn'>
                    <h4>Say Hello</h4>
                    <AiOutlineMail/>
                </div>

                <div className='btn'>
                    <h4>Say Hello</h4>
                    <AiOutlineTwitter/>
                </div>

                <div className='btn'>
                    <h4>Say Hello</h4>
                    <AiOutlineInstagram/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact