/* eslint-disable react/prop-types */
import { useRef } from 'react'

import { Container, InputArea } from './Form.js'

export function Form({ onEdit }){
  const ref= useRef()

  return (
    <Container ref={ref}>
      <InputArea>
      
      </InputArea>


    </Container>
  )
}