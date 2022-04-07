import React from 'react'

export default function Oviveiro() {
  return (
    <section>
      <div id="headline">
      <h3 className='text-center text-uppercase pt-5' id='subtitle'>VIVEIRO DE MUDAS</h3>
        <h1 className='text-center text-uppercase mb-3' id='titlemain'><strong>AGRIFLORESTAL</strong></h1>
      </div>

      <div
        id="carouselMultiItemExample"
        className="carousel slide carousel-dark text-center"
        data-mdb-ride="carousel"
      >
        <div className="d-flex justify-content-center mb-4">
          <button
            className="carousel-control-prev position-relative"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="prev"
          >
            <span><i className="fas fa-chevron-left left-right"></i></span>
          </button>
          <button
            className="carousel-control-next position-relative light"
            type="button"
            data-mdb-target="#carouselMultiItemExample"
            data-mdb-slide="next"
          >
            <span><i className="fas fa-chevron-right left-right"></i></span>
          </button>
        </div>
        <div className="carousel-inner py-4">
          <div className="carousel-item active">
            <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Mão de Obra de Qualidade</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                    </div>
                    <div className='card-icon text-center p-3'><i className="fas fa-seedling main-icon"></i></div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Profissionalismo</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                    </div>
                    <div className='card-icon text-center p-3'><i className="fas fa-hands-helping main-icon"></i></div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Entrega</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                    </div>
                    <div className='card-icon text-center p-3'><i className="fas fa-truck main-icon"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
          <div className="container">
              <div className="row">
                <div className="col-lg-4">
                  <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Mão de Obra de Qualidade</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                    </div>
                    <div className='card-icon text-center p-3'><i className="fas fa-seedling main-icon"></i></div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Profissionalismo</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                    </div>
                    <div className='card-icon text-center p-3'><i className="fas fa-hands-helping main-icon"></i></div>
                  </div>
                </div>

                <div className="col-lg-4 d-none d-lg-block">
                  <div className="card">
                  <div className="card-body">
                      <h5 className="card-title">Card title</h5>
                      <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                      </p>
                    </div>
                    <div className='card-icon text-center p-3'><i className="fas fa-truck main-icon"></i></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="main-content" className='pb-3 pt-5'>
      <p className="content text-center"><i class="fas fa-ellipsis-h" id="separator-one"></i></p>
      <div id="oviveiro-text">
      <h1 className='title text-center mb-3' id='oviveiro'><strong>O VIVEIRO</strong></h1>
          <div className="content text-center mb-4">
            <p>O Viveiro Agriflorestal fica localizado na cidade de Urubici e
          vem fornecendo mudas de diversos tipos para a toda a comunidade urubiciense desde 1990. 
          Nosso objetivo é fornecer um servico de qualidade para nossos clientes e 
          nosso maior retorno e ver o agricultor ter bons resultados.</p>
          </div>
        </div>
        <div id="video" className="container ratio ratio-16x9 mb-5">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3wG4ngW7k7w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <p className="content text-center"><i class="fas fa-ellipsis-h" id="separator-two"></i></p>
      </div>
    </section>
  )
}
