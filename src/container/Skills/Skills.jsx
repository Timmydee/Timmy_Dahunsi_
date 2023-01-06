import React from 'react'
import './Skills.scss'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import git from '../../assets/git.png'
import css from '../../assets/css.png'
import html from '../../assets/html.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import sass from '../../assets/sass.png'

const skill = [react, redux , javascript, git , sass, html, css]

const Skills = () => {

    const settings = {
        // dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    
    return (
        <div className='skills'>
            <div className="skill__container">
                <h3 className='sub-text'>
                    Skills
                </h3>
                
                <div className='skills-content'>
                    <Slider {...settings}>
                        {skill.map((each,index) => (
                            <div className='skill-img' key={index}>
                                <img src={each} alt='/' />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Skills