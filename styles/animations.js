import { useSpring } from "framer-motion";

export const inputTap = {
  // change to whilePressed // DOESNT WORK BETTER WHILE HIGHLIGHTED / HOVER
  tap: {
    scaleX: 1.1,
    scaleY: 1.2,
    transition: {
      type: useSpring,
      stifness: 300,
    },
  },
};
