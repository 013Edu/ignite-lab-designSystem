import { Meta, StoryObj } from '@storybook/react'
import { Heading, PropsHeading } from './Heading'


export default{
    title: 'Components/Heading',
    component: Heading,
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


} as Meta<PropsHeading>

export const Default: StoryObj = {} 

export const CunstomComponent: StoryObj<PropsHeading> = {
    args: {
        asChild: true,
        children: (
            <h1>Heading with h1</h1>
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