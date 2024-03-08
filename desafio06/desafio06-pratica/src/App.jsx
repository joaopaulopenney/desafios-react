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
import { useState } from 'react';

function App() {

  const [products, setProducts] = useState([]);

  const addProduct = () => {
    const number = Math.floor(Math.random() * (Math.floor(1000) - Math.ceil(10)) + Math.ceil(10))

    const data = {id: products.length + 1, name: "Produto", price: number, category: "Categoria", amount: 1}
    setProducts((prev) => [...prev, data])
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


  console.log(products)

  return (
    <>
      <PageHeader />
      <main>
        <PageTitle data={'Seu carrinho'} />
        <button onClick={addProduct}>Adicionar Produto</button>
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
            <Summary />
          </aside>
        </div>
      </main>
    </>
  );
}

export default App;
