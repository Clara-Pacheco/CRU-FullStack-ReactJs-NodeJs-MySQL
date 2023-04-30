import { Container, Title } from './App.js'

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

import { Form } from '../Components/Form.jsx'

export function App() {
  
  return (
  <>
    <Container>
      <Title>Produtos</Title>
      <Form />
    </Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    
    </> 
  )
}


