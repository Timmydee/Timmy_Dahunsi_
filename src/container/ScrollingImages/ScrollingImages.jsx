import React from "react";
import "./ScrollingImages.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import sabi from "../../assets/sabi1.webp";
import cog1 from "../../assets/cityofgrace1.webp";
import cog3 from "../../assets/cityofgrace3.webp";
import portiv from "../../assets/xy2.webp";
import portv from "../../assets/port5.png";
import port3 from "../../assets/dnq.webp";
import port1 from "../../assets/bestcribs.webp";
import port2 from "../../assets/nftsImg.webp";

const ScrollingImages = () => {
  const { scrollY } = useScroll();

  // Define the translation effects for each row
  const xTranslateRow1 = useTransform(scrollY, [0, 800], [0, -200]); // First row moves left
  const xTranslateRow2 = useTransform(scrollY, [0, 800], [0, 200]);  // Second row moves right

  return (
    <div className="scrolling-images">
      {/* First Row */}
      <motion.div
        className="scrolling-images__wrapper"
        style={{ x: xTranslateRow1 }}
      >
        <motion.img src={sabi} alt="Image 1" className="scrolling-image" />
        <motion.img src={port2} alt="Image 2" className="scrolling-image" />
        <motion.img src={port3} alt="Image 3" className="scrolling-image" />
        <motion.img src={portv} alt="Image 4" className="scrolling-image" />
      </motion.div>

      {/* Second Row (moves in opposite direction) */}
      <motion.div
        className="scrolling-images__wrapper"
        style={{ x: xTranslateRow2 }}
      >
        <motion.img src={port1} alt="Image 1" className="scrolling-image" />
        <motion.img src={cog1} alt="Image 2" className="scrolling-image" />
        <motion.img src={portiv} alt="Image 3" className="scrolling-image" />
        <motion.img src={cog3} alt="Image 4" className="scrolling-image" />
      </motion.div>
    </div>
  );
};

export default ScrollingImages;
