export const fade = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { ease: "easeOut", duration: 1 } },
};

export const width = {
  hidden: { width: 0 },
  show: {
    width: 360,
    transition: { ease: "easeIn", duration: 0.4, delay: 0.4 },
  },
};

export const widthSmall = {
  hidden: { width: 0 },
  show: {
    width: 190,
    transition: { ease: "easeIn", duration: 0.4, delay: 0.4 },
  },
};
//360

export const path = {
  hidden: { clipPath: "inset(60%)" },
  show: {
    clipPath: "inset(0%)",
    transition: { ease: "easeOut", duration: 2 },
  },
};

export const container = {
  //   hidden: { x: 100 },
  show: {
    // x: 0,
    transition: {
      duration: 2,
      ease: "ease",
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const fadeInUp = {
  hidden: {
    y: -90,
    opacity: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
