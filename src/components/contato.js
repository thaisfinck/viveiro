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
              <p>Av. Antonio Francisco Ghizoni
                <br/>
              Aos fundos do Ceasa
                <br/>
              CEP: 88650-000
                <br/>
              Urubici - SC</p>
              <a href='https://www.google.com/maps/@-28.0056312,-49.5914905,17z' title='Click para ver no map'><img className="img-thumbnail" src='map.png' alt='' id='map'></img></a>
            </div>
            <div className="col content">
              <p><strong>Entre em contato via:</strong></p>
              <p>Telefone: (49) 99972-4467</p>
              <p>Whatsapp: (49) 99972-4467</p>
              <p>E-mail: viveiroagriflorestal@gmail.com</p>
              < ContactUs />
            </div>
          </div>
        </div>
    </section>
  )
}
