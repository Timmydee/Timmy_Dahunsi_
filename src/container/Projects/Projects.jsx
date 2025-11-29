import React from "react"; 
import "./Project.scss";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
// import portiv from "../../assets/xy2.webp";
// import portv from "../../assets/port5.png";
// import port3 from "../../assets/dnq.webp";
import port1 from "../../assets/bestcribs.webp";
// import port2 from "../../assets/nftsImg.webp";
import sabi from "../../assets/sabi1.webp";
import cog1 from "../../assets/cityofgrace1.webp";
import greeonEnergy from "../../assets/webdevelopmentsolarfrontend.webp";
import farmoria from "../../assets/webdevelopmentfrontend.webp";

// Array of project data
const allWork = [
  // {
  //   imgUrl: greeonEnergy,
  //   title: "GreenOn Energy",
  //   webUrl: "https://greenonenergy.vercel.app/",
  //   about:
  //     " GreenOn Energy is my ongoing passion project focused on connecting people and businesses to sustainable solar energy solutions. Built with Next.js, React, and MongoDB, the platform helps users discover verified solar vendors, explore financing options, and even get automated solar system recommendations tailored to their needs.",
  // },
  {
    imgUrl: sabi,
    title: "The Sabi Lifestyle",
    webUrl: "https://thesabilifestyle.com",
    about:
      "Sabilife is a web application designed to promote sustainable living by providing educational resources, daily eco-tips, and community-driven content for fostering energy-efficient and environmentally conscious habits.",
  },
  // {
  //   imgUrl: bizai,
  //   title: "Biz Ai",
  //   webUrl: "https://bizai-gamma.vercel.app/",
  //   about:
  //     "BizAi is an AI-powered chatbot that helps Nigerian entrepreneurs with business registration, tax, and trade compliance. The web chat is the primary feature, with an optional WhatsApp extension.",
  // },
  {
    imgUrl: port1,
    title: "Best Crib",
    webUrl: "https://bestcrib.vercel.app/",
    about:
      "Best Crib is a housing solution that helps home seekers find vacant apartments in my Local community.",
  },
  {
    imgUrl: cog1,
    title: "RCCG City of Grace",
    webUrl: "https://www.cityofgracerccg.org/",
    about:
      "RCCG City of Grace is a church website created for the RCCG City of Grace community in the United Kingdom, providing information on services, events, and resources to support worship and community engagement..",
  },
  {
    imgUrl: farmoria,
    title: "Farmoria",
    webUrl: "https://www.farmoria.ng/",
    about:
      "Farmoria – A smart platform connecting African farmers directly with local and international stores, streamlining produce sales with secure payments, real-time tracking, and reliable logistics.",
  },
  // {
  //   imgUrl: port2,
  //   title: "NFT Marketplace",
  //   webUrl: "https://nftworld-timmydee.vercel.app/",
  //   about:
  //     "I developed the frontend of this website using Next.js and Tailwind CSS.",
  // },
  // {
  //   imgUrl: port3,
  //   title: "Designer Query",
  //   webUrl: "https://designerquery.vercel.app/",
  //   about:
  //     "I worked with an agile team, developing the frontend using Next.js and Tailwind CSS.",
  // },
  // {
  //   imgUrl: portv,
  //   title: "Brand Website",
  //   webUrl: "https://portfolio-pearl-tau-28.vercel.app/",
  //   about:
  //     "Developed the frontend for this portfolio website using Next.js.",
  // },
  // {
  //   imgUrl: portiv,
  //   title: "Xypher",
  //   webUrl: "https://xyzpher.vercel.app/",
  //   about:
  //     "Built the frontend for Xypher, a decentralized investment platform, using Next.js and Tailwind CSS.",
  // },
];

const Projects = () => {
  return (
    <div className="work" id="work">
      <div className="work__container">
        <h2 className="sub-text">
          <span>Some of my Projects</span>
        </h2>

        <div className="work-portfolio">
          {allWork.map((work, index) => (
            <motion.div 
              key={index}
              className="workContent_col2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="workContent_img">
                <img src={work.imgUrl} alt={work.title} />
              </div>

              <div className="workContent_col3">
                <h3 className="bold-text">{work.title}</h3>
                <p className="pSub-text">{work.about}</p>

                <div className="workContent_col5">
                  <a href={work.webUrl} target="_blank" rel="noopener noreferrer">
                    Check Live Site
                  </a>
                  <div className="arrow">
                    <BsArrowRight />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
