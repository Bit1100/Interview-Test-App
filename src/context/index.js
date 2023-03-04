import { createContext, useContext, useMemo, useReducer } from "react";

const appContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INDEX":
      return { ...state, index: action.payload };

    case "SET_QUESTION":
      return { ...state, question: action.payload };

    case "SET_ISCLICKED":
      return { ...state, isClicked: action.payload };

    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  // INitial State
  const initialState = {
    index: 0,
    question: "",
    isClicked: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const questionsId = useMemo(() => {
    return [
      "AreaUnderTheCurve_901",
      "BinomialTheorem_901",
      "DifferentialCalculus2_901",
    ];
  }, []);

  return (
    <appContext.Provider
      value={{
        state,
        dispatch,
        questionsId,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(appContext);

  if (!context) {
    throw new Error("Must Use appContext() within appContextProvider");
  }

  return context;
};
