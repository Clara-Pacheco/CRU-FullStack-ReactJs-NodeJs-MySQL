import { Table, Thead, Tr, Th } from './Grid.js'

// import { FaTrash , FaEdit } from "react-icons/fa"
// import { toast } from "react-toastify"

export function Grid() {
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Nome</Th>
          <Th>Qtd</Th>
          <Th onlyWeb>Seção</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>

    </Table>
  )
}