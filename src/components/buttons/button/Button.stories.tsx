import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';
import { Icons } from '../../icons/Icons';

export default {
    title: "Components/Button",
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => {
    return <Button {...args}>
        <Icons icon={'pause'} color="primary" css="" />
    </Button>;
};

export const Default = Template.bind({});