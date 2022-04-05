import React from 'react'

export default function Oviveiro() {
  return (
    <section id='oviveiro'>
      <div id="headline">
      <h3 className='text-center pt-5' id='subtitle'>VIVEIRO DE MUDAS</h3>
        <h1 className='mb-3 text-center' id='titlemain'><strong>AGRIFLORESTAL</strong></h1>
      </div>
      <div className="container" id="blocks">
          <div className="row">
            <div className="col">
              <div className="card" style={{width: 250, height: 350}}>
                <div className="card-body">
                  <h5 className="card-title content">Servico de Qualidade</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-seedling fa-5x"></i></div>
              </div>
            </div>
            <div className="col">
              <div className="card" style={{width: 250, height: 350}}>
                <div className="card-body">
                  <h5 className="card-title content">Profissionalismo</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-hands-helping fa-5x"></i></div>
             </div>
            </div>
            <div className="col">
              <div className="card" style={{width: 250, height: 350}}>
                <div className="card-body">
                  <h5 className="card-title content">Entrega</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-truck fa-5x"></i></div>
              </div>
            </div>
          </div>
        <div>
          <div className="content mt-4" id="oviveiro-text">
            <p>O Viveiro Agriflorestal fica localizado na cidade de Urubici e
          vem fornecendo mudas de diversos tipos para a toda a comunidade urubiciense desde 1990. 
          Nosso objetivo é fornecer um servico de qualidade para nossos clientes e 
          nosso maior retorno e ver o agricultor ter bons resultados.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
