import React from 'react';
import { Colors } from './styles';

export default {
  title: 'Colors',
  component: Colors,
};

const Template = (args) => {
  return <Colors {...args} />;
};

export const Red = Template.bind({});
export const RedOpaque = Template.bind({});
export const Black = Template.bind({});
export const White = Template.bind({});
export const Gray = Template.bind({});
export const AquaMarine = Template.bind({});
export const Orange = Template.bind({});

Red.args = {
  backgroundColor: '#DA1314',
};

RedOpaque.args = {
  backgroundColor: '#FF727D',
};

Black.args = {
  backgroundColor: '#000',
};

White.args = {
  backgroundColor: '#FFF',
};

Gray.args = {
  backgroundColor: '#BCBCBC',
};

AquaMarine.args = {
  backgroundColor: '#54B170',
};

Orange.args = {
  backgroundColor: '#FB8B0A',
};
