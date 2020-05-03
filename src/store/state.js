// store.js
import React, { createContext, useReducer } from 'react';

const initialState = {
  userDetails: {},
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_USER_DETAILS':
        return {
          ...state,
          userDetails: action.payload,
        };
      case 'RESET_USER_DETAILS':
        return {
          ...state,
          userDetails: {},
        };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
