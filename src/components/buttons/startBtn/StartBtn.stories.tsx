import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import {StartBtn , StartBtnProps } from './StartBtn';

export default {
    title: "Components/Start",
    component: StartBtn,
} as Meta;

const Template: Story<StartBtnProps> = (args) => {
    return <StartBtn {...args} />;
};

export const Default = Template.bind({});