import { Checkbox } from "@radix-ui/react-checkbox";
import { Envelope, Lock } from "phosphor-react";
import { useState } from "react";
import { FormEvent } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";


export function SignIn(){

  const [isUserSignIn, setIsUserSignIn] = useState(false)

    function handleSignIn(e: FormEvent){
         e.preventDefault()

        setIsUserSignIn(true)

    }

    return(
        <div className="w-screeb h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading className="mt-4">
          Ignite Lab
        </Heading>
        <Text className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form onSubmit={handleSignIn} className="flex flex-col items-stretch w-full gap-4 max-w-sm mt-10">

        {isUserSignIn && <Text>Login realizado!</Text>}

        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input type='email' id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type='password' id="password" placeholder="******" />
          </TextInput.Root>
        </label>
        <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Text size="sm"> Lembrar de mim por 30 dias</Text>
        </label>
        <Button className="mt-4" type="submit">
            Entrar na plataforma
        </Button>
      </form>
      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline">Esqueceu sua senha?</a>
        </Text>
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline">Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
    </div>
    )
}