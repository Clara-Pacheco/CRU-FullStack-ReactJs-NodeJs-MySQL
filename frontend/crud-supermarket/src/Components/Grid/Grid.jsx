/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Table, Thead, Tr, Th, Tbody, Td } from './Grid.js'

import { FaTrash , FaEdit } from "react-icons/fa"
import { toast } from "react-toastify"

import axios from "axios"

export function Grid({ products, setProducts, setOnEdit }) {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = products.filter((product) => product.id !== id);

        setProducts(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };
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
      <Tbody>
        {products.map((item,i)=>(
          <Tr key={i}>
            <Td width="10%">{item.id}</Td>
            <Td width="30%">{item.nome_produto}</Td>
            <Td width="20%">{item.qtd_estoque}</Td>
            <Td width="20%" onlyWeb>{item.secao}</Td>
            <Td alignCenter width="8%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="8%">
              <FaTrash onClick={() => handleDelete(item.id)} />
            </Td>
          </Tr>
        ))}
      </Tbody>

    </Table>
  )
}