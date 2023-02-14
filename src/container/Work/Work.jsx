import React, { useState } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
// import port1 from "../../assets/port1.png";
import porti from '../../assets/porti.png'
import portii from '../../assets/port2.png';
// import portiii from "../../assets/portiii.png";
import portiv from '../../assets/port4.png';
import portv from '../../assets/port5.png';
import portvi from '../../assets/port6.png';

import writei from '../../assets/write1.png';
import writeii from '../../assets/write2.png';
import writeiii from "../../assets/write3.png";
import writeiv from "../../assets/write4.png";
// import {images} from '../../constant';

const allWork = [
  {
    imgUrl: portv,
    title: "Brand Website",
    webUrl:"https://portfolio-pearl-tau-28.vercel.app/",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
  {
    imgUrl: porti,
    title: "Logi Hub",
    gitUrl: "https://github.com/Timmydee/LogisticHub",
    webUrl: "http://logistichub.vercel.app/",
    about:
      "LogiHub is a logistic solution that easily connect people to the closest and reliable Logistic Agent.",
  },
  {
    imgUrl: portii,
    title: "BizDev",
    gitUrl: "https://github.com/Timmydee/DEV-WEBPAGE",
    webUrl: "https://timmydee.github.io/DEV-WEBPAGE/",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
  
  {
    imgUrl: portiv,
    title: "Tenzie Game",
    webUrl:"https://tenzie-game-ten.vercel.app/",
    gitUrl:"https://github.com/Timmydee/Tenzie-game",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
  {
    imgUrl: portvi,
    title: "Color Scheme Generator",
    webUrl:"https://timmydee.github.io/Color-Scheme/",
    gitUrl:"https://github.com/Timmydee/Color-Scheme",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
];

const allWrite = [
  {
    imgUrl: writei,
    title: "Variables in Javascript",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
  {
    imgUrl: writeii,
    title: "Building Web3 Dapps with no code tool :(Bunzz)",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
  {
    imgUrl: writeiii,
    title: "THE REAL DOM AND VIRTUAL DOM",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
  {
    imgUrl: writeiv,
    title: "what is a DAO (Decentralized Autonomous Organization)",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urn pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.",
  },
  
];

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterWork, setFilterWork] = useState(allWork);
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    // setActiveFilter(item)

    if (item === "Websites") {
      setFilterWork(allWork);
      console.log("red")
    } else {
      setFilterWork(allWrite);
      console.log("green")
    }
    // console.log(filterWork)
  };

  return (
    <div className="work">
      <div className="work__container">
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          className="app__header-img"
        >
          <h1 className="sub-text">
            My creative <span>Work</span> Section
          </h1>
        </motion.div>

        <div className="work-filters">
          {["Websites", "Technical Writing"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`work-filter p-text app__fle ${
                filterWork === "Websites" ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="work-portfolio workContent_co ">
          {filterWork.map((work) => (
            // <div className="workContent_col2">
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              className="workContent_col2"
            >
              <div className="workContent_col3">
                <h3 className="bold-text">{work.title}</h3>
                <p className="p-text">{work.about}</p>
                {/* <hr></hr> */}
                
                <div>
                  {filterWork === allWork ?
                    <div className="workContent_col5">
                      <p className="p-text">See Projects</p>
                      <div className="icon eye">
                        <a href={work.webUrl} target="_blank">
                          <AiFillEye />
                        </a>
                      </div>    
                      <div className="icon git">
                        <a href={work.gitUrl} target="_blank">
                          <AiFillGithub />
                        </a>
                      </div>
                    </div>
                    :
                    <div className="workContent_col5">
                      <p className="p-text">Read here</p>
                      <div className="icon eye">
                        <AiFillEye />
                      </div>
                    </div>
                  }
                </div>
                {/* <br/> */}
                {/* <hr/> */}
              </div>

              <div className="workContent_img">
                <img src={work.imgUrl} alt="work" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
