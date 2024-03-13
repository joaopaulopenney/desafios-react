import React, { useEffect, useState } from 'react';

const Summary = ({ products, totalValueAll, setTotalValueAll, setModal }) => {


  useEffect(() => {
    var sum = 0;

    for (var i in products) {
      sum += products[i].totalValue;
    }

    setTotalValueAll(sum)
  }, [products])
  
  return (
    <>
      <div className='box'>
        <header>Resumo da compra</header>
        <div className='info'>
          <div>
            <span>Sub-total</span>
            <span>{totalValueAll}</span>
          </div>
          <div>
            <span>Frete</span>
            <span>Gratuito</span>
          </div>
          <div>
            <button onClick={() => setModal("block")}>
              Adicionar cupom de desconto
              <i className='bx bx-right-arrow-alt'></i>
            </button>
          </div>
        </div>
        <footer>
          <span>Total</span>
          <span>{totalValueAll}</span>
        </footer>
      </div>
      <button onClick={() => { if (totalValueAll > 0) {alert(`Sua compra foi de ${totalValueAll} reais.`); location.reload();} }}>Finalizar Compra</button>
    </>
  );
};

export default Summary;
