import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";
import data from "../data/data.json";

// eslint-disable-next-line react/prop-types
const Quiz = ({ totalQs }) => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(data.questions);
    setTotalQuestions(totalQs);
    // setTotalQuestions(data.questions.length);
  }, [totalQs]);

  const handleChangeAnswers = (data) => {
    // console.log("IN QUIZ Fn", { data, answers });
    // Check if the quistion has already been answered
    const isAnswered = answers.find(
      (answer) => answer.qiestionId === data.qiestionId
    );
    // console.log("isAnswered", { isAnswered });
    if (isAnswered) {
      return;
    }
    // Add the answer to the answers array
    setAnswers([...answers, data]);
    setIndex((index) => index + 1);
    // Check if the answer is correct
    console.log(data);
    if (data.correct) {
      setScore((score) => score + 1);
    }
  };

  // console.log("score", score);
  // console.log("answers", answers);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Question</h1>
          <div
            className="h-100 d-flex justify-content-center align-items-center my-4"
            style={{ minHeight: "400px" }}
          >
            {totalQuestions && totalQuestions >= index + 1 ? (
              <QuestionCard
                data={questions[index]}
                totalQuestions={totalQuestions}
                currentQuestion={index + 1}
                handleChangeAnswers={handleChangeAnswers}
              />
            ) : (
              <div className="row text-center">
                <p className="h4">Total Score</p>
                <p className="h1">
                  <span className="text-success">{score}</span> /{" "}
                  <span>{totalQuestions}</span>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
