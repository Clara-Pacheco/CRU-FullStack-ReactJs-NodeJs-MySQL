/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useRef, useEffect } from 'react'

import { Container, InputArea, Label, Input, Button } from './Form.js'

import axios from 'axios';
import { toast } from "react-toastify"

export function Form({ onEdit, setOnEdit, getProducts }){
  const ref= useRef()

  useEffect(() => {
    if (onEdit) {
      const product = ref.current;

      product.id.value = onEdit.id;
      product.nome_produto.value = onEdit.nome_produto;
      product.qtd_estoque.value = onEdit.qtd_estoque;
      product.secao.value = onEdit.secao;
     
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = ref.current;

    if (
      !product.id.value ||
      !product.nome_produto.value ||
      !product.qtd_estoque.value ||
      !product.secao.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          id: product.id.value,
          nome_produto: product.nome_produto.value,
          qtd_estoque: product.qtd_estoque.value,
          secao: product.secao.value,
        
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          id: product.id.value,
          nome_produto: product.nome_produto.value,
          qtd_estoque: product.qtd_estoque.value,
          secao: product.secao.value,
          
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    product.id.value = "";
    product.nome_produto.value = "";
    product.qtd_estoque.value = "";
    product.secao.value = "";
   
    setOnEdit(null);
    getProducts();
  };

  return (
    <Container ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Id</Label>
        <Input name="id" type='number' />
      </InputArea>

      <InputArea>
        <Label>Nome do Produto</Label>
        <Input name="nome_produto" type='text' />
      </InputArea>

      <InputArea>
        <Label>Qtd em Estoque </Label>
        <Input name="qtd_estoque" type='number' />
      </InputArea>

      <InputArea>
        <Label>Seção</Label>
        <Input name="secao" type='text' />
      </InputArea>

      <Button type="submit">SALVAR</Button>


    </Container>
  )
}