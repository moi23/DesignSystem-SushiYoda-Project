import React from 'react';
import { CommonTexts } from './styles';

export default {
  title: 'CommonTexts',
  component: CommonTexts,
  args: {
    value: 'H1 - Custom Title | Type your text here.',
  },
};

const Template = (args) => {
  return <CommonTexts {...args} />;
};

export const H1 = Template.bind({});
export const H2 = Template.bind({});
export const H3 = Template.bind({});
export const Paragraph = Template.bind({});
export const Link = Template.bind({});

H1.args = {
  color: '#000',
  fontSize: '28',
};

H2.args = {
  color: '#000',
  fontSize: '26',
};

H3.args = {
  color: '#000',
  fontSize: '20',
};

Paragraph.args = {
  color: '#000',
  fontSize: '14',
};

Link.args = {
  color: '#000',
  fontSize: '13',
};
