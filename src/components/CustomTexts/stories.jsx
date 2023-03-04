import React from 'react';
import { CustomTexts } from './styles';

export default {
  title: 'Custom Texts',
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
export const Link = Template.bind({});
export const Paragraph = Template.bind({});

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

Link.args = {
  color: '#000',
  fontSize: '13',
};

Paragraph.args = {
  color: '#000',
  fontSize: '14',
};
