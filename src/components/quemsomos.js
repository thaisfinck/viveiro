import React from 'react'

export default function Quemsomos() {
  return (
    <section className="container" id='quemsomos'>
       <h1 className='title text-center mb-3'><strong>QUEM SOMOS</strong></h1>
        <p className='content text-justify'>O Viveiro Agriflorestal fica localizado na cidade de Urubici e
          vem fornecendo mudas de diversos tipos para a toda a comunidade urubiciense desde 1990. 
          Nosso objetivo é fornecer um servico de qualidade para nossos clientes e 
          nosso maior retorno e ver o agricultor ter bons resultados.
        </p>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
                class="d-block w-100"
                alt="Sunset Over the City"
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                class="d-block w-100"
                alt="Canyon at Nigh"
              />
            </div>
            <div class="carousel-item">
            <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                class="d-block w-100"
                alt="Cliff Above a Stormy Sea"
              />
            </div>
          </div>
          <button class="carousel-control-prev" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </section>
  )
}
