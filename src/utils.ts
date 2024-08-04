import { Variants } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const getStarIcon = (rating: number, index: number) => {
  if (rating >= index + 1) {
    return FaStar;
  } else if (rating >= index + 0.5) {
    return FaStarHalfAlt;
  } else {
    return FaRegStar;
  }
};

export const cardAnimation: Variants = {
  initial: { scale: 0 },
  animate: {
    scale: 1,
    transition: { delay: 0.1, type: "tween" },
  },
  exit: {
    opacity: 0.2,
    transition: { delay: 0.2, type: "keyframe" },
  },
};
