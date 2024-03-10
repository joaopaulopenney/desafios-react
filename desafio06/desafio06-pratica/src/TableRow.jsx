import React, { useEffect } from 'react';

const TableRow = ({ product, plusAmount, minusAmount, deleteProduct }) => {
  const { id, name, price, category, amount } = product;

  return (
    <tr>
      <td>
        <div className='product'>
          <img src='https://picsum.photos/100/120' alt='' />
          <div className='info'>
            <div className='name'>{name}</div>
            <div className='category'>{category}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>
        <div className='qty'>
          <button onClick={() => minusAmount(id)}>
            <i className='bx bx-minus'></i>
          </button>
          <span>{amount}</span>
          <button onClick={() => plusAmount(id)}>
            <i className='bx bx-plus'></i>
          </button>
        </div>
      </td>
      <td>{price * amount}</td>
      <td>
        <button className='remove' onClick={() => deleteProduct(id)}>
          <i className='bx bx-x'></i>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
