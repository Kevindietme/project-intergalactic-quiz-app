
import React from 'react';
import Card from "./Card";
import Result from "./Result";
import data from "../data/space.json";
import "./QuizApp.css";
import goodImage from './resultImages/notBad.png';
import badImage from './resultImages/tooBad.png';
import { useState } from 'react';

const quizLength = data.length;

export default function QuizApp () {
  const [quizId, setQuizId] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (isCorrect) => {
    isCorrect && setScore(score + 1);
    const newQuizId = quizId + 1;
    (newQuizId < quizLength)
      ? setQuizId(newQuizId)
      : setShowResult(true);
  };

  const handleReset = () => {
    setQuizId(0);
    setScore(0);
    setShowResult(false);
  };

  let image;
  if (score >= 4) {
    image = goodImage;
  
  } else {
    image = badImage;
  }

  return (
    <>
      {!showResult ? (
        <Card
          data={data}
          quizId={quizId}
          quizLength={quizLength}
          handleAnswer={handleAnswer}
        />
      ) : (
        <Result
          score={score}
          quizLength={quizLength}
          handleReset={handleReset}
          image={image} 
        />
      )}
    </>
  );
}