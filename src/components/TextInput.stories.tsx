import { Meta, StoryObj } from '@storybook/react'
import { TextInput, PropsTextInput, TextInputRootProps, TextInputIcon } from './TextInput'
import { Envelope } from 'phosphor-react'


export default{
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: (
              <>
                <TextInput.Icon>
                    <Envelope />
                </TextInput.Icon>
                <TextInput.Input placeholder = 'Type your e-mail adress' />
              </>
        )
    },
    argTypes: {
        children:{
                table: {
                    disable: true,
             }
        }
    } 


} as Meta<PropsTextInput>

export const Default: StoryObj <TextInputRootProps>= {} 

export const WithOut: StoryObj <TextInputRootProps>= {
   args: {
    children:  <TextInput.Input placeholder = 'Type your e-mail adress' />
   }
} 

 