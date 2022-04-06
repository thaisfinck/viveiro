import React from 'react'

export default function Oviveiro() {
  return (
    <section id='oviveiro'>
      <div id="headline">
      <h3 className='text-center text-uppercase pt-5' id='subtitle'>VIVEIRO DE MUDAS</h3>
        <h1 className='text-center text-uppercase mb-3' id='titlemain'><strong>AGRIFLORESTAL</strong></h1>
      </div>
      <div className="container" id="blocks">
          <div className="row">
            <div className="col-4 main-blocks">
              <div className="card position-relative bottom-50 main-card">
                <div className="card-body main-body-card">
                  <h5 className="card-title content">Mão de Obra Qualificada</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-seedling"></i></div>
              </div>
            </div>
            <div className="col-4 main-blocks">
              <div className="card position-relative bottom-50 main-card" >
                <div className="card-body main-body-card">
                  <h5 className="card-title content">Profissionalismo</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-hands-helping"></i></div>
             </div>
            </div>
            <div className="col-4 main-blocks" id="extra">
              <div className="card position-relative bottom-50 main-card">
                <div className="card-body main-body-card">
                  <h5 className="card-title content">Entrega e Controle</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className='card-icon text-center pt-5'><i className="fas fa-truck"></i></div>
              </div>
            </div>
          </div>
      </div>
      <div id="oviveiro-text">
      <h1 className='title text-center mb-3'><strong>O VIVEIRO</strong></h1>
          <div className="content text-center mb-4">
            <p>O Viveiro Agriflorestal fica localizado na cidade de Urubici e
          vem fornecendo mudas de diversos tipos para a toda a comunidade urubiciense desde 1990. 
          Nosso objetivo é fornecer um servico de qualidade para nossos clientes e 
          nosso maior retorno e ver o agricultor ter bons resultados.</p>
          </div>
        </div>
        <div id="video" class="container ratio ratio-16x9 mb-5">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3wG4ngW7k7w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
  )
}
