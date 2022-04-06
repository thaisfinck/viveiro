import React from 'react'

export default function Contato() {
  return (
    <section className="container" id='contato'>
       <h1 className='title text-center mb-3'><strong>CONTATO</strong></h1>
        <div className="container">
          <div className="row">
            <div className="col content">
              <p><strong>Endereço:</strong></p>
              <p>Rua do viveiro, nº 0
                <br/>
              Bairro: Centro
                <br/>x
              CEP: 99999-999
                <br/>
              Cidade: Urubici - SC</p>
              <img className="img-fluid" src='map.png' alt=''></img>
            </div>
            <div className="col content">
              <p><strong>Entre em contato via:</strong></p>
              <p>Telefone: (48) 9999-9999</p>
              <p>E-mail:</p>
              <form>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nome"></input>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="E-mail"></input>
              </div>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Assunto"></input>
              </div>
              <div className="input-group mb-3">
              <textarea className="form-control" aria-label="With textarea" placeholder='Mensagem'></textarea>
              </div>
             </form>
            </div>
          </div>
        </div>
    </section>
  )
}
