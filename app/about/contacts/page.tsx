import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts | About | A500 Next App',
};

const Contacts: React.FC = () => {
  return <h1>{`Contacts page`}</h1>;
};

export default Contacts;
