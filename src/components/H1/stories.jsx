import React from 'react';
import { H1 } from './styles';

export default {
  title: 'H1',
  component: H1,
  args: {
    children: 'Não sei',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <H1 {...args} />;
};
