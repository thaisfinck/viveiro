import React from 'react'
import ContactUs from './contactUs';


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
              <a href='https://www.google.com/maps/@-28.0056312,-49.5914905,17z' title='Click para ver no map'><img className="img-thumbnail" src='map.png' alt='' id='map'></img></a>
            </div>
            <div className="col content">
              <p><strong>Entre em contato via:</strong></p>
              <p>Telefone: (48) 9999-9999</p>
              <p>E-mail:</p>
              < ContactUs />
            </div>
          </div>
        </div>
    </section>
  )
}
