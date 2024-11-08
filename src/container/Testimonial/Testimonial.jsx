import React from "react";
import "./Testimonial.scss";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Collaborating with Timilehin was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Timilehin's enthusiasm for every facet of development truly stands out.",
    name: "Michael Johnson",
    position: "Director of AlphaStream Technologies",
    img: "" 
  },
  {
    text: "Timilehin’s approach to web development was highly structured and client-centered. He provided valuable insights that improved the final product beyond our expectations. We highly recommend him!",
    name: "Sarah Williams",
    position: "CEO of Brightside Innovations",
    img: "" 
  },
  {
    text: "Working with Timilehin transformed our online presence. His creativity and problem-solving skills were exceptional. His work gave our brand a much-needed boost!",
    name: "James Peterson",
    position: "Marketing Head, Horizon Corp",
    img: "" 
  }
];

const Testimonial = () => {
  // Duplicate testimonials to create a continuous loop
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <h2 className="sub-text">
          <span>Kind words from satisfied clients</span>
        </h2>

        <motion.div 
          className="testimonial-carousel"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 60, // Slow scrolling duration
            ease: "linear",
          }}
        >
          {repeatedTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.img} alt={testimonial.name} className="testimonial-img" />
                <div>
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
