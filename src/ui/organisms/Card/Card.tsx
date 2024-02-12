import React from "react";
import s from "./Card.module.css";

interface CardProps {
  item: {
    src?: string | null | undefined;
    id?: React.Key | null | undefined;
  };
  handleChoice: (card: {
    id?: React.Key | null | undefined;
    src?: string | null | undefined;
  }) => void;
  flipped?: boolean;
}

const Card = ({ item, handleChoice, flipped }: CardProps) => {
  const handleClick = () => {
    handleChoice(item);
  };

  return (
    <div className={`card relative`}>
      <div className={`card-wrapper w-[120px]`}>
        <img
          className={`front w-[100%] block  ${s.front} ${
            flipped ? s.flipped : ""
          }`}
          src={`${item.src}`}
          alt={`Лицевая сторона`}
        />
        <img
          onClick={handleClick}
          className="back w-[100%] block"
          src="/backside.png"
          alt="Задняя сторона"
        />
      </div>
    </div>
  );
};

export default Card;
