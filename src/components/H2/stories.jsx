import React from 'react';
import { H2 } from './styles';

export default {
  title: 'H2',
  component: H2,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <H2 {...args} />;
};
