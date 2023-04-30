import { Container } from './App.js'

import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

export function App() {
  
  return (
    <Container>
    <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    <h1>Teste</h1>
   </Container>
  )
}


