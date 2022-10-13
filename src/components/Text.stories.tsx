import { Meta, StoryObj } from '@storybook/react'
import { Text, PropsText } from './Text'


export default{
    title: 'Components/text',
    component: Text,
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    },
    argTypes: {
        size: {
            options: ['sm', 'md', 'lg'],
            control: 'inline-radio'
        }
    }


} as Meta<PropsText>

export const Default: StoryObj = {} 

export const CunstomComponent: StoryObj<PropsText> = {
    args: {
        asChild: true,
        children: (
            <p>Text with tag P</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
        asChild: {
            table: {
                disable: true,
            }
        }
    }
} 