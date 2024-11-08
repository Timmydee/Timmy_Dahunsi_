export const fadeInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };
  
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, y: 20, transition: { duration: 0.5 } },
};

export const container = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

