"use client";
import React, { useState } from "react";

import { TbReload } from "react-icons/tb";

import { Button } from "@/ui";
import Board from "../Board/Board";
import Result from "../Result/Result";

// const cardIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// cardIds.sort(() => 0.5 - Math.random());
// console.log(cardIds);

// Массив картинок
const cardImages = [
  { src: "/1.png", matched: false },
  { src: "/2.png", matched: false },
  { src: "/3.png", matched: false },
  { src: "/4.png", matched: false },
  { src: "/5.png", matched: false },
  { src: "/6.png", matched: false },
  { src: "/7.png", matched: false },
  { src: "/8.png", matched: false },
];

const Game = () => {
  // массив всех карточек перемешенных с id
  const [cards, setCards] = React.useState<any>([]);
  // массив всех перевернутых карточек
  const [turns, setTurns] = React.useState(0);

  const [choiceOne, setChoiceOne] = React.useState<any>();
  const [choiceTwo, setChoiceTwo] = React.useState<any>();

  // отладка что что пока не прозойдет проверка не выбирать новые карточки
  const [disbled, setDesabled] = React.useState(false);

  const [showResult, setShowResult] = React.useState(false);

  // выбранная карточка
  const handleChoice = (card: {
    id?: React.Key | null | undefined;
    src?: string | null | undefined;
  }) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  React.useEffect(() => {
    shuffleCards();
  }, []);

  React.useEffect(() => {
    cards.every((item: any) => {
      if (item.matched === true) {
        setShowResult(true);
      } else {
        setShowResult(false);
      }
    });
  }, [cards]);

  // Функция перемешивания карточек и добавление id

  const shuffleCards = () => {
    // создание массива с одинаковыми карточками и разным id
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
    setShowResult(false);
  };

  // Сброс выбранной карты и ходов
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDesabled(false);
  };

  // сравнение выбранных карт при обновлении комопнента и следим за их изменением
  React.useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDesabled(true);
      // Если у выбранных карточек совпадают src то запуск завершения хода
      if (choiceOne.src === choiceTwo.src) {
        // Возвращаем новый массив карточек
        setCards((prevCards: any[]) => {
          // проходим по нему и возвращаем объект внутри массива
          return prevCards.map((card) => {
            // если совпадают тогда возвращаем новый массив объектов и у выбранных карточек совпадение true
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        console.log("совпадают");
        resetTurn();
      } else {
        // Если не совпадают то запуск завершение хода
        console.log("Не совпадают");
        // задержка обратного разворота карточек при неверном выборе
        setTimeout(resetTurn, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  console.log(cards);

  return (
    <>
      <div className="game-wrapper flex justify-center items-center gap-[40px]">
        <div className="top flex items-center flex-col">
          <div className="game-title text-[35px] font-bold uppercase">
            Мемо Сказки
          </div>
          <Button
            onClick={shuffleCards}
            className="bg-orange-500 transition ease-in-out delay-100  hover:scale-110"
          >
            Новая игра
          </Button>
          <div className="text-[18px] mt-2 text-[20px]">Ходов: {turns}</div>
        </div>
        <div className="bottom">
          <Board
            cards={cards}
            handleChoice={handleChoice}
            choiceOne={choiceOne}
            choiceTwo={choiceTwo}
            disabled={disbled}
          />
        </div>
      </div>
      {showResult && <Result shuffleCards={shuffleCards} />}
    </>
  );
};

export default Game;
