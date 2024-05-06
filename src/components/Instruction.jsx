// eslint-disable-next-line react/prop-types
const Instructions = ({ handleQuiz, totalQuestions }) => {
  return (
    <>
      <h1 className="text-center">Welcome to Quiz Application</h1>
      <h2 className="mb-3">
        <b>
          <u>General Instructions</u>
        </b>
        :-
      </h2>
      <ol className="list-group list-group-numbered">
        <li className="list-group-item">
          This{" "}
          <b>
            <u>Quiz</u>
          </b>{" "}
          consist of multiple choice questions.
        </li>
        <li className="list-group-item">
          <span className="text-danger">*</span> All the questions are
          compulsory.
        </li>
        <li className="list-group-item">
          <span className="text-danger">*</span> You have to select one option
          from each question.
        </li>
        <li className="list-group-item">
          <b>
            <u>Teams</u>
          </b>
          : Only team entries are allowed, and teams should consist of two
          people.
        </li>
        <li className="list-group-item">
          <b>
            <u>Electronic devices</u>
          </b>
          : Participants are not allowed to use mobile phones or other
          electronic devices during the quiz.
        </li>
        <li className="list-group-item">
          <b>
            <u>Audience</u>
          </b>
          : Audience members should not give hints or clues to competitors.
        </li>
        <li className="list-group-item">
          <b>
            <u>Questions</u>
          </b>
          : Questions can be multiple choice, true/false statements, or specific
          answer questions.
        </li>
        <li className="list-group-item">
          <b>
            <u>Time</u>
          </b>
          : There may be a time limit for each round.
        </li>
        <li className="list-group-item">
          <b>
            <u>Scoring</u>
          </b>
          : The average score from all rounds may determine the winners.
        </li>
        <li className="list-group-item">
          <b>
            <u>Ties</u>
          </b>
          : If there is a tie in the average score, an additional round or
          rounds may be played to determine the winner.
        </li>
        <li className="list-group-item">
          <b>
            <u>Multiple attempts</u>
          </b>
          : Participants may only have one attempt to answer a question
          correctly.
        </li>
        <li className="list-group-item">
          <b>
            <u>Theme</u>
          </b>
          : The quiz may have a theme, such as music or movies, or it may be a
          general knowledge quiz.
        </li>
        <li className="list-group-item">
          <b>
            <u>Number of questions</u>
          </b>
          : The quiz may have around 60 questions.
        </li>
      </ol>
      <div className="d-flex justify-content-between align-items-center">
        <input
          type="text"
          className="input-group-text my-4 w-75"
          placeholder="Enter Number of Questions"
          onChange={(e) => totalQuestions(e.target.value)}
        />
        <button
          onClick={() => handleQuiz(true)}
          className="btn btn-primary my-4 float-end"
        >
          Start Quiz
        </button>
      </div>
    </>
  );
};

export default Instructions;
