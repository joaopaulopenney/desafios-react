import React, { useState } from 'react'

const PageCreateProductButton = ({ addProduct }) => {

    const [id, setId] = useState(1);

    const productCreate = () => {
        const number = Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(10)) + Math.ceil(10));

        const data = {id: id, name: "Produto", price: number, category: "Categoria", amount: 1, totalValue: number};
        setId(id + 1);
        addProduct(data);
    }

  return (
    <button onClick={productCreate}>Adicionar Produto</button>
  )
}

export default PageCreateProductButton;