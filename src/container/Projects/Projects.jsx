import React, { useState } from "react";
import "./Project.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
// import port1 from "../../assets/port1.png";
import porti from '../../assets/porti.png'
import portii from '../../assets/port2.png';
import portvii from '../../assets/pics1.png';
// import portiii from "../../assets/portiii.png";
import portiv from '../../assets/port4.png';
import portv from '../../assets/port5.png';
import portvi from '../../assets/port6.png';
import port1 from '../../assets/bestImg.webp'
import port2 from '../../assets/nftsImg.webp'



const allWork = [
    {
      imgUrl: port2,
      title: "Nft MarketPlace",
      webUrl:"https://nftworld-five.vercel.app/",
      about:
        "I designed the frontend of this website using Next.Js and TailwindCss.",
    },
    {
      imgUrl: portv,
      title: "Brand Website",
      webUrl:"https://portfolio-pearl-tau-28.vercel.app/",
      about:
        "I developed the frontend of a this web application that serves as a portfolio website for my client.",
    },
    {
      imgUrl: port1,
      title: "Best Crib",
      webUrl:"https://bestcrib.vercel.app/",
      about:
        "Best Crib is a housing solution that helps home seekers find vacant apartments in my Local community.",
    },
    {
      imgUrl: portvii,
      title: "Tradify",
      webUrl:"https://tradify-nine.vercel.app/",
      about:
        "Tradify is a cryptocurrency information platform that provides users with the most current cryptocurrency market prices, ensuring timely access to relevant data.",
    },
    {
      imgUrl: portii,
      title: "BizDev",
      gitUrl: "https://github.com/Timmydee/DEV-WEBPAGE",
      webUrl: "https://timmydee.github.io/DEV-WEBPAGE/",
      about:
        "Bizdev is a landing page clone for a freelance business development company.",
    },
    {
      imgUrl: portvi,
      title: "Color Scheme Generator",
      webUrl:"https://timmydee.github.io/Color-Scheme/",
      gitUrl:"https://github.com/Timmydee/Color-Scheme",
      about:
        "Color Scheme is an open source project i created , which assist designers and developers to choose a color palette.",
    },
  ];


const Projects = () => {
    return (
        <div className="work" id='work'>
            <div className='work__container'>
                <h2 className="sub-text"><span>Some of my Projects</span></h2>

                <div className="work-portfolio workContent_co ">
                    {allWork.map((work) => (
                        <div className="workContent_col2">
                            <div>
                                <div className="workContent_col3">
                                    <h3 className="bold-text">{work.title}</h3>
                                    <p className="pSub-text">{work.about}</p>
                                    {/* <hr></hr> */}
                                
                                
                                    <div>
                                        <div className="workContent_col5">
                                            <div className="icon eye">
                                                <a href={work.webUrl} target="_blank">
                                                    SEE PROJECT
                                                </a>
                                            </div>    
                                            <div className="icon git">
                                                <a href={work.gitUrl} target="_blank">
                                                    VIEW CODE
                                                </a>
                                            </div>
                                            {/* <p className="p-text">See Projects</p>
                                            <div className="icon eye">
                                                <a href={work.webUrl} target="_blank">
                                                    <AiFillEye />
                                                </a>
                                            </div>    
                                            <div className="icon git">
                                                <a href={work.gitUrl} target="_blank">
                                                    <AiFillGithub />
                                                </a>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                
                            </div>

                            <div className="workContent_img">
                                <img src={work.imgUrl} alt="work" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        

    )
}

export default Projects

