/* eslint-disable react/prop-types */
import { useRef } from 'react'

import { Container, InputArea, Label, Input, Button } from './Form.js'

export function Form(){
  const ref= useRef()

  return (
    <Container ref={ref}>
      <InputArea>
        <Label>Id</Label>
        <Input name="id" type='number' />
      </InputArea>

      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" type='text' />
      </InputArea>

      <InputArea>
        <Label>Qtd </Label>
        <Input name="qtd" type='number' />
      </InputArea>

      <InputArea>
        <Label>Seção</Label>
        <Input name="secao" type='text' />
      </InputArea>

      <Button type="submit">SALVAR</Button>


    </Container>
  )
}