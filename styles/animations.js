import { useSpring } from "framer-motion";

export const inputHover = {
  // change to whilePressed
  hover: {
    scaleX: 1.1,
    scaleY: 1.2,
    transition: {
      type: useSpring,
      stifness: 300,
    },
  },
};
