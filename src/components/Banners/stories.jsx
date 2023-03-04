import React from 'react';
import { Banners } from './styles';

import bowBannerIcon from '../../assets/images/bowBanner.png';
import lamenBannerIcon from '../../assets/images/lamenBanner.png';
import sushiBannerIcon from '../../assets/images/sushiBanner.png';
import yodaPatternImage from '../../assets/images/YodaPattern.png';

export default {
  title: 'Pattenrs and Banners',
  component: Banners,
};

const Template = (args) => {
  return <Banners {...args} />;
};

export const BowBanner = Template.bind({});
export const LamenBanner = Template.bind({});
export const sushiBanner = Template.bind({});
export const yodasPattern = Template.bind({});

BowBanner.args = {
  backgroundColor: bowBannerIcon,
};

LamenBanner.args = {
  backgroundColor: lamenBannerIcon,
};

sushiBanner.args = {
  backgroundColor: sushiBannerIcon,
};

yodasPattern.args = {
  backgroundColor: yodaPatternImage,
};
