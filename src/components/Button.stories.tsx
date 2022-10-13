import { Meta, StoryObj } from '@storybook/react'
import { Button, PropsButton } from './Button'


export default{
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
    },
    argTypes: {}


} as Meta<PropsButton>

export const Default: StoryObj = {} 

