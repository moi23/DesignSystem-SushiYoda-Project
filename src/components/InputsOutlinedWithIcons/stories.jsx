import React from 'react';
import { InputsOutlinedWithIcons } from './styles';

export default {
  title: 'Inputs Outlined Without Icons',
  component: InputsOutlinedWithIcons,
  args: {
    placeholder: 'Enter with your text here.',
  },
};

const Template = (args) => {
  return <InputsOutlinedWithIcons {...args} />;
};

export const Red = Template.bind({});
export const Black = Template.bind({});
export const AquaMarine = Template.bind({});
export const Gray = Template.bind({});

Red.args = {
  colorBorder: '#DA1314',
  color: '#FF727D',
  colorPlaceholder: '#FF727D',
};

Black.args = {
  colorBorder: '#000',
  color: '#000',
  colorPlaceholder: '#FF727D',
};

AquaMarine.args = {
  colorBorder: '#54B170',
  color: '#54B170',
  colorPlaceholder: '#54B170',
};

Gray.args = {
  colorBorder: '#BCBCBC',
  color: '#BCBCBC',
  colorPlaceholder: '#BCBCBC',
};
