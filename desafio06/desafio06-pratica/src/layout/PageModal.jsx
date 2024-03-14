import React, { useEffect, useState } from 'react'

const PageModal = ({ totalValueAll, setTotalValueAll, modal, setModal, coupon, setCoupon }) => {

    const [text, setText] = useState("");
    const [span, setSpan] = useState("");

    const applyCoupon = () => {
        setSpan("");
        if (text === "cupom1234" && coupon === false) {
            setCoupon(true);
            setSpan("Cupom aplicado com sucesso!");
            setText("");
        } else {
            setSpan("Este cupom não existe ou já foi utilizado!");
            setText("");
        }
    }

    window.onclick = (e) => {
        if (e.target.className == "modal") {
            setModal("none");
            setText("");
        }
    }

  return (
    <div className='modal' style={{ display: `${modal}` }}>
        <div className='modal-content'>
          <span className='close' onClick={() => {setModal("none"); setText("")}}>&times;</span>
          <p>Digite o cupom de desconto: (cupom1234)</p>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}  />
          <button onClick={applyCoupon}>Aplicar Cupom</button>
          <span>{span}</span>
        </div>
      </div>
  )
}

export default PageModal;