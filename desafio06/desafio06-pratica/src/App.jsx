/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

todo - fazer um placeholder para quando não houver itens no carrinho
todo - inserção de novos produtos no carrinho
todo - remoção de produtos já inseridos
todo - alteração de quantidade de cada item 
todo - cálculo do preço total dos itens inseridos

todo - FUNCIONALIDADE EXTRA: aplicação de cupom de desconto
*/
import './styles.scss';

import PageHeader from './layout/PageHeader';
import PageTitle from './layout/PageTitle';
import Summary from './Summary';
import TableRow from './TableRow';
import { useState } from 'react';
import PageCreateProductButton from './layout/PageCreateProductButton';
import PageModal from './layout/PageModal';

function App() {

  const [products, setProducts] = useState([]);
  const [totalValueAll, setTotalValueAll] = useState(0);
  const [modal, setModal] = useState("none");

  const addProduct = (data) => {
    setProducts([...products, data]);
  }

  const plusAmount = (id) => {
    var productsArray = [...products];

    for (var i in productsArray) {
      if (productsArray[i].id == id) {
        productsArray[i].amount += 1
      }
    }

    setProducts(productsArray);
  }

  const minusAmount = (id) => {
    var productsArray = [...products];

    for (var i in productsArray) {
      if (productsArray[i].id == id && productsArray[i].amount > 1) {
        productsArray[i].amount -= 1;
      }
    }

    setProducts(productsArray);
  }

  const deleteProduct = (id) => {
    var filtered = products.filter((product) => product.id !== id);
    setProducts(filtered);
  }

  const updateTotalValue = (id, totalValue) => {
    var productsArray = [...products];

    for (var i in productsArray) {
      if (productsArray[i].id == id) {
        productsArray[i].totalValue = totalValue;
      }
    }

    setProducts(productsArray);
  } 

  console.log(products)

  return (
    <>
      <PageModal totalValueAll={totalValueAll} setTotalValueAll={setTotalValueAll} modal={modal} setModal={setModal} />
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <PageCreateProductButton addProduct={addProduct} />
        <div className='content'>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.length > 0 &&
                    products.map((product, key) => (
                    <TableRow key={key} product={product} plusAmount={plusAmount} minusAmount={minusAmount} deleteProduct={deleteProduct} updateTotalValue={updateTotalValue} />
                  )) || <tr><td><span>Não há itens no carrinho.</span></td></tr>
                }
              </tbody>
            </table>
          </section>
          <aside>
            <Summary products={products} totalValueAll={totalValueAll} setTotalValueAll={setTotalValueAll} setModal={setModal} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
