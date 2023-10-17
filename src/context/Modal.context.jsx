import React, { createContext, useContext, useReducer } from 'react';

import ErrorModal from '../components/ErrorModal.jsx';
import SuccessModal from '../components/SuccessModal.jsx';

const ModalDispatchContext = createContext(null);

export const ModalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ModalDispatchContext.Provider value={dispatch}>
      <SuccessModal isOpen={state.isOpenSuccessModal} onClose={() => dispatch({ type: 'closeSuccessModal' })} />
      <ErrorModal isOpen={state.isOpenErrorModal} onClose={() => dispatch({ type: 'closeErrorModal' })} />
      {children}
    </ModalDispatchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useModalDispatch = () => {
  return useContext(ModalDispatchContext);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'openSuccessModal': {
      return { ...state, isOpenSuccessModal: true };
    }
    case 'closeSuccessModal': {
      return { ...state, isOpenSuccessModal: false };
    }
    case 'openErrorModal': {
      return { ...state, isOpenErrorModal: true };
    }
    case 'closeErrorModal': {
      return { ...state, isOpenErrorModal: false };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const initialState = { isOpenSuccessModal: false, isOpenErrorModal: false };
