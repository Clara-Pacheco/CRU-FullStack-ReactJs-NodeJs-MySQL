/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

import { Container } from "./Header"

import Switch from 'react-switch'


export function Header({ toggleTheme }){

  const { COLORS, title } = useContext(ThemeContext)

  return (
    <Container>
      Controle de Estoque

      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={shade(0.15, COLORS.HEADER)}
        onColor={COLORS.SWITCHON}
       
      />
    </Container>
  )
}