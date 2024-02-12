import React from "react";
import Card from "../Card/Card";

interface BoardProps {
  cards: {
    [x: string]: any;
    src?: string | null | undefined;
    id?: React.Key | null | undefined;
  };
  handleChoice: (card: {
    id?: React.Key | null | undefined;
    src?: string | null | undefined;
  }) => void;
}

const Board = ({ cards, handleChoice }: BoardProps) => {
  return (
    <div className="card-grid grid grid-cols-4 gap-[30px] mt-[60px]">
      {cards.map((card: { id: React.Key | null | undefined }) => (
        <Card key={card.id} item={card} handleChoice={handleChoice} />
      ))}
    </div>
  );
};

export default Board;