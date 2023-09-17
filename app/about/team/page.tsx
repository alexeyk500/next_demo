import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | About | A500 Next App',
};

const Team: React.FC = () => {
  return <h1>{`Team page`}</h1>;
};

export default Team;
