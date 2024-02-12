/*
* CHALLENGE progresso do formulário

* INSTRUÇÕES
Neste desafio sua missão é criar um formulário e seus 4 campos (com controlled inputs),
juntamente com uma barra de progresso que altera-se conforme o usuário preenche os campos.
- Crie também validações para cada campo conforme instruções abaixo.

* BARRA DE PROGRESSO
Para aproveitar estilização já definida, crie:
- a barra com um elemento pai chamado .bar-container e seu filho .bar

* CAMPOS DO FORMULÁRIO:
input - nome completo - válido se digitar no mínimo dois nomes,
input - email - válido se digitar um e-mail,
select - estado civil,
radio - gênero

Para validação de e-mail use a seguinte RegEx: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

* FUNCIONAMENTO
Espera-se que o formulário tenha 4 campos ao todo. Portanto, quando o usuário preencher
o primeiro campo, a barra de progresso deve assumir 25% do tamanho total;
o segundo campo, 50% e assim por diante...

Caso o usuário não tenha definido valores para os elementos de select e radio,
os mesmos não devem ser considerados como preenchidos até então.

Se o usuário preencher um campo e apagar seu valor, este campo deve ser considerado como vazio,
fazendo com que a barra de progresso regrida novamente.

Desabilitar o botão de enviar caso todos os campos não estejam preenchidos/válidos.

Ao enviar, deve-se apresentar um alert javascript com sucesso, limpar todos os campos
do formulário e zerar a barra de progresso novamente.
*/

import { useEffect, useState } from "react";

function App() {
  const [form, setForm] = useState({name: "", email: "", state: "", gender: ""});
  const [isEmail, setIsEmail] = useState(false);
  const [isName, setIsName] = useState(false);

  const handleName = (e) => {
    let updatedValue = {};
    updatedValue = {name: e.target.value};
    setForm(form => ({
      ...form,
      ...updatedValue
    }));
  };

  const handleEmail = (e) => {
    let updatedValue = {};
    updatedValue = {email: e.target.value};
    setForm(form => ({
      ...form,
      ...updatedValue
    }));
  };

  const handleState = (e) => {
    let updatedValue = {};
    updatedValue = {state: e.target.value};
    setForm(form => ({
      ...form,
      ...updatedValue
    }));
  };

  const handleGender = (e) => {
    let updatedValue = {};
    updatedValue = {gender: e.target.value};
    setForm(form => ({
      ...form,
      ...updatedValue
    }));
  };

  const submitForm = () => {
    window.location.reload();
    alert("Sucesso")
  };

  const emailRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const nameRegEx = /^([A-Z][a-z]{1,}\s)+[A-Z][a-z]{1,}$/;

  useEffect(() => {
    const result = emailRegEx.test(form.email);
    if (result == true) {
      setIsEmail(true);
    } else {
      setIsEmail(false);
    }
  }, [form.email])

  useEffect(() => {
    const result = nameRegEx.test(form.name);
    if (result == true) {
      setIsName(true);
    } else {
      setIsName(false);
    }
  }, [form.name])

  return (
    <div className='App'>
      <h3>desafio fernandev</h3>
      <h1>progresso do formulário</h1>

      <main>
        <div className="bar-container">{ isName && <div className="bar"></div> }{ isEmail && <div className="bar"></div> }{ form.state && <div className="bar"></div> }{ form.gender && <div className="bar"></div> }</div>
        <div className='form-group'>
          <label htmlFor='name'>Nome Completo</label>
          <input type="text" id="name" name="name" value={form.name} onChange={handleName} />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>E-mail</label>
          <input type="email" id="email" name="email" value={form.email} onChange={handleEmail} />
        </div>
        <div className='form-group'>
          <label htmlFor='state'>Estado Civil</label>
          <select id="state" name="state" onChange={handleState}>
            <option value=''>- selecione...</option>
            <option value='solteiro'>Solteiro</option>
            <option value='casado'>Casado</option>
            <option value='divorciado'>Divorciado</option>
          </select>
        </div>
        <div className='form-group'>
          <label htmlFor='gender'>Gênero</label>
          <div className='radios-container'>
            <span>
              <input type='radio' name="gender" id="gender" value="masculino" onClick={handleGender}/> Masculino
            </span>
            <span>
              <input type='radio' name="gender" id="gender" value="feminino" onClick={handleGender}/> Feminino
            </span>
          </div>
        </div>
        <button disabled={ !isName || !isEmail || !form.state || !form.gender } onClick={submitForm}>Enviar Formulário</button>
      </main>
    </div>
  );
}

export default App;
