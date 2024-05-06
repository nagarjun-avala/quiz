const QuestionCard = ({
  // eslint-disable-next-line react/prop-types
  data,
  // eslint-disable-next-line react/prop-types
  totalQuestions,
  // eslint-disable-next-line react/prop-types
  currentQuestion,
  // eslint-disable-next-line react/prop-types
  handleChangeAnswers,
}) => {
  const handleSubmitAnswer = (key, value) => {
    // console.log(value);
    // eslint-disable-next-line react/prop-types
    const correct = data.answer === key;
    // eslint-disable-next-line react/prop-types
    handleChangeAnswers({ value, qiestionId: data.id, correct });
    // console.log("answer", value, key);
    // console.log("answer", data);
  };
  return (
    <>
      <div className="card" style={{ minWidth: "800px" }}>
        <div className="card-header py-2">
          <span className="h2">Q. </span>
          {"  "}
          <span className="h4">
            {
              // eslint-disable-next-line react/prop-types
              data?.question
            }
          </span>
        </div>
        <div className="card-body">
          <div className="card-text">
            {
              // eslint-disable-next-line react/prop-types
              data?.options.length &&
                // eslint-disable-next-line react/prop-types
                data.options.map((option) => {
                  const key = Object.keys(option)[0];
                  const value = option[key];
                  return (
                    <button
                      onClick={() => handleSubmitAnswer(key, value)}
                      className="d-block my-3 w-100 btn btn-primary text-capitalize text-start"
                      key={key}
                    >
                      {value}
                    </button>
                  );
                })
            }
          </div>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-end align-items-center">
            <p className="m-0">
              {currentQuestion}/{totalQuestions}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionCard;
