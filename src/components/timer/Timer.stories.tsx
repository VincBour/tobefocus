import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Timer } from './Timer';

export default {
    title: 'Components/Timer',
    component: Timer,
} as ComponentMeta<typeof Timer>

const Template: ComponentStory<typeof Timer> = (args) => <Timer  {...args}/>

export const Default = Template.bind({});
Default.args ={
    minutes: "12",
    secondes: "59"
}

export const Start = Template.bind({});
Start.args ={
    minutes: "05",
    secondes: "00"
}

export const Stop = Template.bind({});
Stop.args ={
    minutes: "00",
    secondes: "00"
}