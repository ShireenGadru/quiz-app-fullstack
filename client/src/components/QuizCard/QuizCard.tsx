import { useEffect, useState } from "react";
import { IOption } from "../../types/Questions.types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import {
  fetchQuestions,
  updateSelectedOptions,
} from "../../features/questionsSlice";

interface QuizProps {
  type: "react" | "js";
}

export const QuizCard = (props: QuizProps) => {
  const { type } = props;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<IOption>();
  const [isOptionSelected, setIsOptionSelected] = useState<boolean>(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchQuestions(type));
  }, [dispatch, type]);

  const { questionsList } = useSelector((state: RootState) => state.questions);
  const selectedOptions = useSelector(
    (state: RootState) => state.questions.selectedOptions
  );

  let result = 0;
  selectedOptions.forEach((option) => {
    if (option.isCorrectOption) {
      result++;
    }
  });

  const question = questionsList[currentIndex];
  const handleAnswer = (option: IOption) => {
    if (!isOptionSelected) {
      setSelectedOption(option);
      setIsOptionSelected(true);
      const selectedValue = {
        questionId: question?.id,
        isCorrectOption: option?.correct,
      };
      dispatch(updateSelectedOptions(selectedValue));
    }
  };

  const getButtonClassName = (option: IOption) => {
    if (!isOptionSelected) return;
    if (option.correct) {
      return "correct-answer";
    }

    if (selectedOption && selectedOption === option && !option.correct) {
      return "wrong-answer";
    }

    return "";
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsOptionSelected(false);
  };

  const handleBack = () => {
    setCurrentIndex((prev) => prev - 1);
  };
  return (
    <div>
      <div className="question-wrapper">
        <div className="question">{question?.question}</div>
        {question?.options?.map((option) => {
          return (
            <button
              key={option?.text}
              className={`option ${getButtonClassName(option)}`}
              disabled={isOptionSelected}
              onClick={() => handleAnswer(option)}
            >
              {option?.text}
            </button>
          );
        })}
        {currentIndex !== 0 && (
          <button className="next-btn" onClick={handleBack}>
            {" "}
            back
          </button>
        )}

        <button className="next-btn" onClick={handleNext}>
          {" "}
          next
        </button>

        {currentIndex === questionsList?.length && (
          <div>
            Result:
            <div>{`You scored ${result}/${questionsList?.length}`}</div>
          </div>
        )}
      </div>
    </div>
  );
};
