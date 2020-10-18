import { useContext } from 'react';
import { DevModeStateContext } from '..';
import { DevModeStateContextShape } from '../LoginProvider.types';

const useLoginContext = (): DevModeStateContextShape => {
  const contextState = useContext(DevModeStateContext);
  if (contextState === null) {
    throw new Error('useLoginProvider must be used within a LoginProvider');
  }
  return contextState;
};

export { useLoginContext };
