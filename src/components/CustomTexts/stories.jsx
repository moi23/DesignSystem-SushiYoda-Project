import React from 'react';
import { CustomTexts } from './styles';

export default {
  title: 'CustomTexts',
  component: CustomTexts,
  args: {
    children: 'H1 - Custom Title | Type your text here.',
  },
};

const Template = (args) => {
  return <CustomTexts {...args} />;
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
