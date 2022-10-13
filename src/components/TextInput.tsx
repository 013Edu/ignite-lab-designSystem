import { clsx } from 'clsx'
import { InputHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'

TextInputIcon.displayName = 'TextInput.Root'

export interface TextInputRootProps {
    children: ReactNode
}

function TextInputRoot(props: TextInputRootProps){

   return(
    <div className={clsx(' flex items-center gap-3 h-12 py-4 px-3 rounded focus-within:ring-2 ring-cyan-300 bg-gray-800 w-full ')}>
    {props.children}
   </div>

   )

}

TextInputIcon.displayName = 'TextInput.Icon'

export interface TextInputIcon {
    children: ReactNode
}
function TextInputIcon(props: TextInputIcon){

    return(
        <Slot className=' w-6 h-6 text-gray-400'>
        {props.children}
        </Slot>
    )

}

export interface PropsTextInput extends InputHTMLAttributes<HTMLInputElement>{}

TextInputIcon.displayName = 'TextInput.Input'

function TextInputInput(props : PropsTextInput){
    return(
        <input className= 'bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none'
            {...props}
        />
    )
} 


export const TextInput = {
    Root: TextInputRoot,
    Input: TextInputInput,
    Icon: TextInputIcon
}