import React from 'react';
import { ButtonsFilled } from './styles';

export default {
  title: 'Buttons Filled',
  component: ButtonsFilled,
  args: {
    children: 'Button',
  },
};

const Template = (args) => {
  return <ButtonsFilled {...args} />;
};

export const Red = Template.bind({});
export const Black = Template.bind({});
export const AquaMarine = Template.bind({});

Red.args = {
  backgroundColor: '#DA1314',
  color: '#FFF',
};

Black.args = {
  backgroundColor: '#000',
  color: '#FFF',
};

AquaMarine.args = {
  backgroundColor: '#54B170',
  color: '#FFF',
};
