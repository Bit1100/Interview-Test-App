import { MathJax } from "better-react-mathjax";
import { useAppContext } from "../context";

export const QuestionWrapper = () => {
  const {
    state: { index, question, isClicked },
  } = useAppContext();
  return (
    <div className="question-wrapper">
      <span className="question-no">Question-{index + 1}</span>
      <MathJax
        dynamic
        className={isClicked ? "question question-slide" : "question"}
      >
        {question}
      </MathJax>
    </div>
  );
};
