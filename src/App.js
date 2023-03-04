import { BtnWrapper, QuestionWrapper } from "./components/";
import { useAppContext } from "./context";
import { useEffect } from "react";

const App = () => {
  const {
    state: { index },
    dispatch,
    questionsId,
  } = useAppContext();

  useEffect(() => {
    const fetchQuestion = async () => {
      const response = await fetch(
        `https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${questionsId[index]}`
      );

      const question = await response.json();

      dispatch({ type: "SET_QUESTION", payload: question[0].Question });
    };

    fetchQuestion();
  }, [index, questionsId, dispatch]);

  return (
    <section className="container">
      <h1 className="section-heading">Interview Test</h1>
      <main className="slider">
        <QuestionWrapper />
        <BtnWrapper />
      </main>
    </section>
  );
};

export default App;
