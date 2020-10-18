import React, { FC } from 'react';
import { useLoginContext } from '../LoginProvider/hooks/useLoginProvider';

const InnerComponent: FC = () => {
  const { userName, loading } = useLoginContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userName) {
    return <div>Woops! Missing userName</div>;
  }

  return <div>Woohoo! {userName} is logged in !</div>;
};

export { InnerComponent };
