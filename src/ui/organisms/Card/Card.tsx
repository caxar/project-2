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
  disabled?: boolean;
}

const Card = ({ item, handleChoice, flipped, disabled }: CardProps) => {
  const handleClick = () => {
    // Что бы не делать множественный выбор если не true ждем пока
    // закончится сессия выбора
    if (!disabled) {
      handleChoice(item);
    }
  };

  return (
    <div className={`card relative`}>
      <div className={`card-wrapper w-[150px] cursor-pointer`}>
        <img
          className={`front w-[100%] block  ${s.front} ${
            flipped ? s.flipped : ""
          }`}
          src={`${item.src}`}
          alt={`Лицевая сторона`}
        />
        <img
          onClick={handleClick}
          className={`back w-[100%] block ${s.back} ${
            flipped ? s.back_flipped : ""
          }`}
          src="/backside.png"
          alt="Задняя сторона"
        />
      </div>
    </div>
  );
};

export default Card;
