import { useState } from "react";
import { Button } from "../../component";
import { quiz } from "../../data";
import _ from "lodash";
import Modal from "react-modal";
const handleInitial = (quizParam: typeof quiz) => {
  return Object.keys(quizParam).reduce(
    (acc, _val, idx) => ({ ...acc, [idx + 1]: null }),
    {}
  );
};
const Quiz = () => {
  const [quizState, setQuizState] = useState<{ [x: number]: boolean | null }>(
    () => handleInitial(quiz)
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [correctAns, setCorrectAns] = useState(0);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "25%",
      height: "25%",
    },
  };
  const handleSelected = (_val: string, q: number, a: number) => {
    setQuizState((prev) => {
      const copy = { ...prev };
      copy[q] = quiz[q - 1].correctAnswer === a;
      return copy;
    });
  };
  const closeModal = () => {
    setIsSubmitted(false);
    handleResetAll();
  };
  const handleSubmit = () => {
    const isNull = _.findKey(quizState, (o) => {
      return o === null;
    });
    console.log({ isNull, quizState });
    if (!_.isNil(isNull)) {
      alert("Fill all values");
      return;
    }
    const num = _.keys(_.pickBy(quizState, (o) => o === true)).length;
    setCorrectAns(num);
    console.log({ num, quizState });

    setIsSubmitted(true);
  };
  const handleResetAll = () => {
    setQuizState(handleInitial(quiz));
    setIsSubmitted(false);
    setCorrectAns(0);
  };
  return (
    <div className="w-full flex flex-col justify-center ">
      <Modal
        isOpen={isSubmitted}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        onAfterClose={handleResetAll}
        contentLabel="Quiz Result"
      >
        <div className="w-full h-full flex flex-col justify-evenly items-center">
          <div>
            {correctAns === quiz.length ? (
              <p>Congratulations you have answered all the questions right. </p>
            ) : (
              <p>
                You got {correctAns} / {quiz.length} right
              </p>
            )}
          </div>
          <div className="flex gap-2">
            <Button onClick={handleResetAll} variant="ghost">
              Reset
            </Button>
            <Button onClick={() => setIsSubmitted(false)} variant="dark">
              Continue
            </Button>
          </div>
        </div>
      </Modal>
      <h1 className="text-2xl text-bold">React Quiz</h1>
      <hr className="my-2" />
      <form key={`${isSubmitted}`} onSubmit={(e) => e.preventDefault()}>
        {quiz.map((eachQuestion, index) => (
          <div key={eachQuestion.question}>
            <h1 className="text-lg font-medium">
              {index + 1}. {eachQuestion.question}
            </h1>
            <div className="flex flex-col gap-2">
              {eachQuestion.answers.map((eachOption, idx) => (
                <div key={eachOption} className="ml-10">
                  <input
                    onChange={(e) =>
                      handleSelected(e.target.value, index + 1, idx)
                    }
                    name={`${index}`}
                    value={eachOption}
                    type="radio"
                  />
                  <label htmlFor={eachOption}> {eachOption}</label>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="my-4">
          <Button
            onClick={handleSubmit}
            type="submit"
            size="default"
            className=""
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Quiz;
