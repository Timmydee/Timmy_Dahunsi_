import React, { useState } from "react";
import "./Articles.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import writei from '../../assets/write1.png';
import writeii from '../../assets/write2.png';
import writeiii from "../../assets/write3.png";
import writeiv from "../../assets/write4.png";

const allWrite = [
    {
      imgUrl: writei,
      title: "Create a React App under 1 minute",
      webUrl: "https://timmydahunsi.hashnode.dev/create-a-react-app-under-1-minute",
      about:
        `We'll be showing you how to create a React app in just a couple of minutes using a handy tool called "create-react-app."`,
    },
    {
      imgUrl: writeii,
      webUrl:"https://timmydahunsi.hashnode.dev/how-to-develop-a-sign-up-and-sign-in-page-using-react-by-replicating-linkedins-sign-up-page",
      title: "How to Develop a Sign up and Sign-in Page In React",
      about:
        "This tutorial will guide you through the process of building a React form and handling form submissions with a user sign-up example.",
    },
    {
      imgUrl: writeiii,
      webUrl: "https://timmydahunsi.hashnode.dev/the-power-of-net-framework-an-overview-of-its-benefits",
      title: "The power of .NET Framework: An Overview of its Benefits",
      about:
        "The .NET framework is a comprehensive platform for building and deploying modern applications.",
    },
    {
      imgUrl: writeiv,
      webUrl: "https://timmydahunsi.hashnode.dev/what-is-a-dao-decentralized-autonomous-organization",
      title: "what is a DAO (Decentralized Autonomous Organization)",
      about:
        "DAO stands for decentralized Autonomous organization, A DAO is a collectively owned organization working towards a shared mission governed by blockchain..",
    },
    
  ];


const Articles = () => {
    return (
        <div className="write">
            <div className='write__container'>
                <h2 className="sub-text"><span>Highlighted Articles</span></h2>

                <div className="write-portfolio writeContent_co ">
                    {allWrite.map((work) => (
                        <div className="writeContent_col3">
                            <h3 className="mid-text">{work.title}</h3>
                            <p className="pSub-text">{work.about}</p>
                            {/* <hr></hr> */}
                            <div className="writeContent_col5">
                                <div className="icon eye">
                                    <a href={work.webUrl} target="_blank">
                                        Read Article
                                    </a>
                                </div>                                 
                            </div>  
                        </div>
                    ))}
                </div>
            </div>
        </div>
        

    )
}

export default Articles

