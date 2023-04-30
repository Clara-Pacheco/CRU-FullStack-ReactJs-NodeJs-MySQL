import { Container, Title } from './App.js'

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { Form } from '../Components/Form/Form.jsx'
import { Grid } from '../Components/Grid/Grid.jsx'

export function App() {
  
  return (
  <>
    <Container>
      <Title>Produtos</Title>
      <Form />
      <Grid />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    
    </> 
  )
}


