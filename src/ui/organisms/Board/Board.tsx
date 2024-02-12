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
  choiceOne?: {};
  choiceTwo?: {};
  matched?: any;
  disabled?: boolean;
}

const Board = ({
  cards,
  handleChoice,
  choiceOne,
  choiceTwo,
  matched,
  disabled,
}: BoardProps) => {
  return (
    <div className="card-grid grid grid-cols-4 gap-[15px]">
      {cards.map(
        (card: { matched: boolean; id: React.Key | null | undefined }) => (
          <Card
            key={card.id}
            item={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo}
            disabled={disabled}
          />
        )
      )}
    </div>
  );
};

export default Board;
