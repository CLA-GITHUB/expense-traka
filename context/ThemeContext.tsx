import React, { createContext, useReducer } from "react";

type initialStateProps = {
  dark: boolean;
};

const initialState = {
  dark: true,
};

const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case "toggle": {
      return {
        ...state,
        dark: !state.dark,
      };
    }

    default:
      break;
  }
};
interface ThemeProviderProps {
  children: React.ReactNode;
}
export const ThemeContext = createContext(initialState as any);
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  console.log(state);
  const toggle = () => {
    dispatch({ type: "toggle" });
  };
  const value = {
    state,
    dispatch,
    toggle,
  };
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
