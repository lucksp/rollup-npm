import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { LoginProvider } from '../../..';
import { InnerComponent } from './innerComponent';

const Sandbox: FC = () => {
  return (
    <LoginProvider>
      I am the Sandbox. I will not be exported as module, but as a playground for the LoginAs
      Provider...
      <InnerComponent />
    </LoginProvider>
  );
};

ReactDOM.render(<Sandbox />, document.getElementById('root'));
