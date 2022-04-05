import React from 'react'

export default function Oviveiro() {
  return (
    <section id='oviveiro'>
      <div id="headline">
      <h3 className='text-center text-uppercase pt-5' id='subtitle'>VIVEIRO DE MUDAS</h3>
        <h1 className='text-center text-uppercase mb-3' id='titlemain'><strong>AGRIFLORESTAL</strong></h1>
      </div>
      <div className="container grid">
          <div className="row ms-5" style={{height: 200}}>
            <div className="col">
              <div className="card position-relative bottom-50" style={{width: 250, height: 350}}>
                <div className="card-body">
                  <h5 className="card-title content">Servico de Qualidade</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-seedling fa-5x"></i></div>
              </div>
            </div>
            <div className="col">
              <div className="card position-relative bottom-50" style={{width: 250, height: 350}}>
                <div className="card-body">
                  <h5 className="card-title content">Profissionalismo</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-hands-helping fa-5x"></i></div>
             </div>
            </div>
            <div className="col">
              <div className="card position-relative bottom-50" style={{width: 250, height: 350}}>
                <div className="card-body">
                  <h5 className="card-title content">Entrega</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-truck fa-5x"></i></div>
              </div>
            </div>
          </div>
      </div>
      <div className='p-5' id="oviveiro-text">
      <h1 className='title text-center mb-3'><strong>O VIVEIRO</strong></h1>
          <div className="content align-middle mb-4">
            <p>O Viveiro Agriflorestal fica localizado na cidade de Urubici e
          vem fornecendo mudas de diversos tipos para a toda a comunidade urubiciense desde 1990. 
          Nosso objetivo é fornecer um servico de qualidade para nossos clientes e 
          nosso maior retorno e ver o agricultor ter bons resultados.</p>
          </div>
        </div>
    </section>
  )
}
