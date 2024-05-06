import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Instructions from "./components/Instruction";
import { useState } from "react";
import Quiz from "./components/Quiz";

function App() {
  const [openQuiz, setOpenQuiz] = useState(false);
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  return (
    <>
      <div className="container py-5">
        {openQuiz ? (
          <Quiz totalQs={numberOfQuestions} />
        ) : (
          <Instructions
            totalQuestions={setNumberOfQuestions}
            handleQuiz={setOpenQuiz}
          />
        )}
      </div>
    </>
  );
}

export default App;
