import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Settings, SettingsProps } from './Settings';

export default {
    title: "Components/Settings",
    component: Settings,
} as Meta;

const Template: Story<SettingsProps> = (args) => {
    return <Settings {...args} />;
};

export const Default = Template.bind({});