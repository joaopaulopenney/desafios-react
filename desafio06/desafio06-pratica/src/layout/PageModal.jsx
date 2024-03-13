import React, { useState } from 'react'

const PageModal = ({ totalValueAll, setTotalValueAll, modal, setModal }) => {

    const [text, setText] = useState("");
    const [span, setSpan] = useState("");
    const [coupon, setCoupon] = useState(false);

    const applyCoupon = () => {
        if (totalValueAll > 0) {
            setSpan("");
            if (text === "cupom1234" && coupon === false) {
                setSpan("Cupom aplicado com sucesso!");
                setTotalValueAll(totalValueAll - (totalValueAll / 10))
                setText("");
                setCoupon(true);
            } else {
                setSpan("Este cupom não existe ou já foi utilizado!");
                setText("");
            }
        } else {
            setSpan("Adioione os itens no carrinho");
        }
    }

    window.onclick = (e) => {
        if (e.target.className == "modal") {
            setModal("none");
        }
    }

  return (
    <div className='modal' style={{ display: `${modal}` }}>
        <div className='modal-content'>
          <span className='close' onClick={() => setModal("none")}>&times;</span>
          <p>Digite o cupom de desconto: (cupom1234)</p>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}  />
          <button onClick={applyCoupon}>Aplicar Cupom</button>
          <span>{span}</span>
        </div>
      </div>
  )
}

export default PageModal;