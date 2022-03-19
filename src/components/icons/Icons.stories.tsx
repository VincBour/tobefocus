import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import {Icons, IconsProps } from './Icons';

export default {
    title: "Components/Icons",
    component: Icons,
} as Meta;

const Template: Story<IconsProps> = (args) => {
    return <Icons {...args} />;
};

export const ChevronRightPrimary = Template.bind({});
ChevronRightPrimary.args = {
    icon: "chevron_right",
    color: "primary"
}
export const ChevronRightSecondary = Template.bind({});
ChevronRightSecondary.args = {
    icon: "chevron_right",
    color: "secondary"
}
export const PausePrimary = Template.bind({});
PausePrimary.args = {
    icon: "pause",
    color: "primary"
}
export const PauseSecondary = Template.bind({});
PauseSecondary.args = {
    icon: "pause",
    color: "secondary",
}
export const PlayCirclePrimary = Template.bind({});
PlayCirclePrimary.args = {
    icon: "play_circle",
    color: "primary"
}
export const PlayCircleSecondary = Template.bind({});
PlayCircleSecondary.args = {
    icon: "play_circle",
    color: "secondary"
}