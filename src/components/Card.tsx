import { FC, useState } from "react";
import { motion } from "framer-motion";
import { RxCross2 } from "react-icons/rx";
import { Rating } from "./Rating";
import { CardProps } from "../types";
import { cardAnimation } from "../utils";

export const Card: FC<CardProps> = ({
  id,
  description,
  price,
  rating,
  thumbnail,
  title,
  onDelete,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <motion.div
      variants={cardAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
      className="px-5 mt-2 max-w-[350px] h-[650px] flex flex-col items-center relative overflow-hidden rounded-md shadow-md gap-y-5 py-10 border"
    >
      {!isImageLoaded && (
        <div className="w-full h-[300px] bg-gray-100 animate-pulse rounded-md" />
      )}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-auto rounded-md"
        onLoad={() => setIsImageLoaded(true)}
      />
      <Rating rating={rating} />
      <h3 className="text-xl font-bold">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(price)}
      </h3>
      <p className="text-lg font-semibold text-center">{title}</p>
      <p className="text-sm text-gray-600 text-center">{description}</p>
      <button className=" absolute top-2 right-2" onClick={() => onDelete(id)}>
        <RxCross2 size="24" />
      </button>
    </motion.div>
  );
};
