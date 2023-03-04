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
  colorBorder: '#DA1314',
  color: '#DA1314',
};

Black.args = {
  colorBorder: '#000',
  color: '#000',
};

AquaMarine.args = {
  colorBorder: '#54B170',
  color: '#000',
};
