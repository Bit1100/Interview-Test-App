import { useAppContext } from "../context";

export const BtnWrapper = () => {
  const {
    state: { index },
    dispatch,
    questionsId,
  } = useAppContext();

  const handleLeft = () => {
    const leftIndex = (index - 1 + questionsId.length) % questionsId.length;
    dispatch({ type: "SET_ISCLICKED", payload: true });
    dispatch({ type: "SET_INDEX", payload: leftIndex });
    setTimeout(() => {
      dispatch({ type: "SET_ISCLICKED", payload: false });
    }, 1000);
  };

  const handleRight = () => {
    const rightIndex = (index + 1) % questionsId.length;
    dispatch({ type: "SET_ISCLICKED", payload: true });
    dispatch({ type: "SET_INDEX", payload: rightIndex });
    setTimeout(() => {
      dispatch({ type: "SET_ISCLICKED", payload: false });
    }, 1000);
  };

  return (
    <div className="btn-wrapper">
      <button onClick={() => handleLeft()} className="btn btn-left">
        &#10096;
      </button>
      <button onClick={() => handleRight()} className="btn btn-right">
        &#10097;
      </button>
    </div>
  );
};
