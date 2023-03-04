import React from 'react';
import { ButtonsOutlined } from './styles';

export default {
  title: 'ButtonsOutlined',
  component: ButtonsOutlined,
  args: {
    children: 'Button',
  },
};

const Template = (args) => {
  return <ButtonsOutlined {...args} />;
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
