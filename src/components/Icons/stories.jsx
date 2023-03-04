import React from 'react';
import { Icons } from './styles';

import YodaSushiLogotipo from '../../assets/images/logo.png';
import ClockIcon from '../../assets/images/Clock.png';
import SushiIcon from '../../assets/images/SushiIcon.png';
// import YodaSushiLogo from '../../assets/images/logo.png';
// import YodaSushiLogo from '../../assets/images/logo.png';

export default {
  title: 'Icons',
  component: Icons,
};

const Template = (args) => {
  return <Icons {...args} />;
};

export const YodaSushiLogo = Template.bind({});
export const Clock = Template.bind({});
export const Sushi = Template.bind({});

YodaSushiLogo.args = {
  backgroundColor: YodaSushiLogotipo,
};

Clock.args = {
  backgroundColor: ClockIcon,
};

Sushi.args = {
  backgroundColor: SushiIcon,
};
