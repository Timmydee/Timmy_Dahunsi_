import React, { useState } from "react";
import "./Work.scss";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import work1 from '../../assets/work1.png'
import work2 from '../../assets/work2.png'

const allWork = [
  {
      imgUrl: work1,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  },
  {
      imgUrl: work1,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  },
  {
      imgUrl: work1,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  },
  {
      imgUrl: work1,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  },
  {
      imgUrl: work1,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  }
]

const allWrite = [
  {
      imgUrl: work2,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  },
  {
      imgUrl: work2,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  },
  {
      imgUrl: work2,
      title: 'FountainHead NFTs',
      about:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna pellentesque risus nec dictum cursus porttitor nisl. Sed laoreet.'
  }
]


const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filterWork, setFilterWork] = useState(allWork)
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    // setActiveFilter(item)
    

    if (item === "Websites"){
      setFilterWork(allWork)
    } else {
      setFilterWork(allWrite)
    }
  };

  return (
    <div className="work">
      <div className="work__container">
        <h1 className="sub-text">
          My creative <span>Work</span> Section
        </h1>

        <div className="work-filters">
          {["Websites", "Technical Writing"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`work-filter p-text app__fle ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item }
            </div>
          ))}
        </div>
        <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5}}
                className="work-portfolio workContent_co "
            >
                {filterWork.map((work) => (
                    <div className="workContent_col2">
                        <div className='workContent_col3'>
                            <h3 className="bold-text">{work.title}</h3>
                            <p className="p-text">{work.about}</p>
                            {/* <hr></hr> */}
                            {/* <div className='workContent_img'>
                                <img src={work.imgUrl} alt='work' />
                            </div> */}
                            <div className='workContent_col5'>
                                <p className="p-text">See Projects</p>
                                <div className="icon eye">
                                  <AiFillEye />
                                </div>
                                <div className="icon git">
                                  <AiFillGithub />
                                </div>
                            </div>
                            {/* <br/> */}
                            {/* <hr/> */}
                        </div>
                        
                        <div className='workContent_img'>
                            <img src={work.imgUrl} alt='work' />
                        </div>
                    </div>
                ))}
            </motion.div>
      </div>
    </div>
  );
};

export default Work;
