import React, { createContext, useState, useEffect, FC } from 'react';
import { DevModeStateContextShape, LoginProviderProps } from './LoginProvider.types';

const initialContextState: DevModeStateContextShape = {
  userName: '',
  loading: true,
};

export const DevModeStateContext = createContext<DevModeStateContextShape | null>(
  initialContextState
);

const LOGIN_STEPS = {
  INITIAL: 'INITIAL',
  COMPLETE: 'COMPLETE',
};

const LoginProvider: FC<LoginProviderProps> = ({ handleLoadingDisplay = false, children }) => {
  const [loginStep, setLoginStep] = useState(LOGIN_STEPS.INITIAL);
  const [userName, setUserName] = useState(initialContextState.userName);

  useEffect(() => {
    if (loginStep === LOGIN_STEPS.INITIAL) {
      setTimeout(() => {
        setUserName('test name');
        setLoginStep(LOGIN_STEPS.COMPLETE);
      }, 3000);
    }
  }, [loginStep]);

  const isLoading = loginStep !== LOGIN_STEPS.COMPLETE;
  if (handleLoadingDisplay && isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <DevModeStateContext.Provider
      value={{
        userName,
        loading: isLoading,
      }}
    >
      {children}
    </DevModeStateContext.Provider>
  );
};

export { LoginProvider };
