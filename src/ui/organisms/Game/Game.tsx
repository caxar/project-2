"use client";

import { Button } from "@/ui";
import React, { useState } from "react";
import Card from "../Card/Card";
import Board from "../Board/Board";

// const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// cardIds.sort(() => 0.5 - Math.random());
// console.log(cardIds);

// Массив картинок
const cardImages = [
  { src: "/1.png" },
  { src: "/2.png" },
  { src: "/3.png" },
  { src: "/4.png" },
  { src: "/5.png" },
  { src: "/6.png" },
  { src: "/7.png" },
  { src: "/8.png" },
];

const Game = () => {
  // массив всех карточек перемешенных с id
  const [cards, setCards] = React.useState<any>([]);
  // массив всех перевернутых карточек
  const [turns, setTurns] = React.useState(0);

  const [choiceOne, setChoiceOne] = React.useState<any>();
  const [choiceTwo, setChoiceTwo] = React.useState<any>();

  // выбранная карточка
  const handleChoice = (card: {
    id?: React.Key | null | undefined;
    src?: string | null | undefined;
  }) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  console.log(cards, turns);

  // Функция перемешивания карточек и добавление id
  const shuffleCards = () => {
    // создание массива с одинаковыми карточками и разным id
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // Сброс выбранной карты и ходов

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  // сравнение выбранных карт при обновлении комопнента и следим за их изменением
  React.useEffect(() => {}, [choiceOne, choiceTwo]);

  return (
    <div className="gameflex container py-4">
      <div className="game-wrapper flex justify-center items-center flex-col ">
        <div className="game-title text-[35px] font-bold uppercase">
          Игра на память
        </div>
        <Button onClick={shuffleCards}>Начать игру</Button>
        <Board cards={cards} handleChoice={handleChoice} />
      </div>
    </div>
  );
};

export default Game;
