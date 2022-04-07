import React from 'react'

export default function Quemsomos() {
  return (
    <section className="container" id='quemsomos'>
      <div id="quemsomos-text">
       <h1 className='title text-center mb-3'><strong>QUEM SOMOS</strong></h1>
        <p className='content content text-center'>O Viveiro Agriflorestal fica localizado na cidade de Urubici e
          vem fornecendo mudas de diversos tipos para a toda a comunidade urubiciense desde 1990. 
          Nosso objetivo é fornecer um servico de qualidade para nossos clientes e 
          nosso maior retorno e ver o agricultor ter bons resultados.
        </p>
      </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
                className="d-block w-100"
                alt="Sunset Over the City"
              />
            </div>
            <div className="carousel-item">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                className="d-block w-100"
                alt="Canyon at Nigh"
              />
            </div>
            <div className="carousel-item">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                className="d-block w-100"
                alt="Cliff Above a Stormy Sea"
              />
            </div>
          </div>
          <button className="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </section>
  )
}
