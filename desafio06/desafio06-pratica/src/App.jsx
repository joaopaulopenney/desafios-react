/*
? DESAFIO - Shopping Cart:

Você deve desenvolver um carrinho de compras funcional.
Funcionalidades que esperamos que você desenvolva:

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
import { useEffect, useState } from 'react';
import PageCreateProductButton from './layout/PageCreateProductButton';

function App() {

  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

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
        productsArray[i].amount -= 1
      }
    }

    setProducts(productsArray);
  }

  const deleteProduct = (id) => {
    var filtered = products.filter((product) => product.id !== id);
    setProducts(filtered);
  }

  useEffect(() => {
    for (var i in products) {
      setTotalValue(products[i].price * products[i].amount)
    }
  }, [products])

  console.log(products)

  return (
    <>
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
                {products.map((product, key) => (
                  <TableRow key={key} product={product} plusAmount={plusAmount} minusAmount={minusAmount} deleteProduct={deleteProduct} />
                ))}
              </tbody>
            </table>
          </section>
          <aside>
            <Summary totalValue={totalValue} />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
