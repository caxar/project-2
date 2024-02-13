import { Button } from "@/ui";
import React from "react";
import Confetti from "react-confetti";

interface ResultProps {
  shuffleCards: () => void;
}

// const score = window.localStorage.getItem("score");
// const bestScore = window.localStorage.getItem("best-score");

const Result = ({ shuffleCards }: ResultProps) => {
  const [storedScore, setStoredScore] = React.useState("");
  const [storedBestScore, setStoredBestScore] = React.useState("");

  React.useEffect(() => {
    const storedScore = window.localStorage.getItem("score");
    const storedBestScore = window.localStorage.getItem("best-score");

    setStoredScore(storedScore || "");
    setStoredBestScore(storedBestScore || "");
  }, []);

  return (
    <div
      className="result-bg fixed h-[100%] w-[100%] bg-black bg-opacity-25 flex items-center
    justify-center"
    >
      <div
        className="result-content w-[500px] h-[300px] bg-white rounded-lg py-[20px]
      px-[30px] flex items-center justify-center flex-col gap-[10px]
      shadow-[0_20px_60px_#d4d4d480] "
      >
        <div className="text-[20px] uppercase font-bold">Поздравляем 🎉</div>
        <div className="">Количество ходов: {storedScore}</div>
        <div className="">Твой рекорд: {storedBestScore}</div>
        <Button onClick={shuffleCards} className="bg-orange-500">
          Новая игра
        </Button>
      </div>
      <Confetti wind={0.0} gravity={0.1} />
    </div>
  );
};

export default Result;
