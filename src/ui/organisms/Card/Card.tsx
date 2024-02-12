import React from "react";

interface CardProps {
  item: {
    src?: string | null | undefined;
    id?: React.Key | null | undefined;
  };
  handleChoice: (card: {
    id?: React.Key | null | undefined;
    src?: string | null | undefined;
  }) => void;
}

const Card = ({ item, handleChoice }: CardProps) => {
  const handleClick = () => {
    handleChoice(item);
  };

  return (
    <div className="card relative">
      <div className="card-wrapper">
        <img
          className="front w-[100%] block"
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
