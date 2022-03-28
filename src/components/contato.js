import React from 'react'

export default function Contato() {
  return (
    <section className="container">
       <h1 id='contato' className='title'><strong>Contato</strong></h1>
        <div className="container">
          <div className="row">
            <div className="col content">
              <p><strong>Endereço:</strong></p>
              <p>Rua do viveiro, nº 0
                <br/>
              Bairro: Centro
                <br/>
              CEP: 99999-999
                <br/>
              Cidade: Urubici - SC</p>
              <img src='map.png' alt=''></img>
            </div>
            <div className="col content">
              <p><strong>Entre em contato via:</strong></p>
              <p>Telefone: (48) 9999-9999</p>
              <p>E-mail:</p>
              <form>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Nome"></input>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="E-mail"></input>
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Assunto"></input>
              </div>
              <div class="input-group mb-3">
              <textarea class="form-control" aria-label="With textarea" placeholder='Mensagem'></textarea>
              </div>
             </form>
            </div>
          </div>
        </div>
    </section>
  )
}
