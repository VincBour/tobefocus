import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { NextBtn, NextBtnProps } from './NextBtn';

export default {
    title: "Components/Next",
    component: NextBtn,
} as Meta;

const Template: Story<NextBtnProps> = (args) => {
    return <NextBtn {...args} />;
};

export const Default = Template.bind({});