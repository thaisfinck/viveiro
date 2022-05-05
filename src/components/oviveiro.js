import React from 'react';
import {useState} from 'react'

export default function Oviveiro() {
  
    const [isReadMoreShown, setIsReadMoreShown] = useState(false);

    const toggleBtn = () => {
      setIsReadMoreShown(prevState => !prevState);
    }

    return (
      <section>
        <div id="headline">
        <h3 className='text-center text-uppercase pt-5' id='subtitle'>VIVEIRO DE MUDAS</h3>
          <h1 className='text-center text-uppercase mb-3' id='titlemain'><strong>AGRIFLORESTAL</strong></h1>
        </div>

        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center mb-3"
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
                        <h5 className="card-title">Sistema de Parceria</h5>
                        <p className="card-text">   
                          Trabalhamos em conjunto com o produtos para fornecer mudas de qualidade para o plantio.
                        </p>
                      </div>
                      <div className='card-icon text-center p-3'><i className="fas fa-hands-helping main-icon"></i></div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Variedade</h5>
                        <p className="card-text">
                          Com uma equipe de trabalho experiente, produzimos mudas de hortaliças, eucalipto e flores.
                        </p>
                      </div>
                      <div className='card-icon text-center p-3'><i className="fas fa-seedling main-icon"></i></div>
                    </div>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Compromisso com o Cliente</h5>
                        <p className="card-text">
                          Nosso compromisso está em fornecer o melhor produto para nosso cliente e parceiro.
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
        <p className="content text-center"><i className="fas fa-ellipsis-h" id="separator-one"></i></p>
        <div id="oviveiro-text">
        <h1 className='title text-center mb-3' id='oviveiro'><strong>O VIVEIRO</strong></h1>
            <div className="content text-center mb-4">
              <p>O Viveiro Agriflorestal fica localizado na cidade de Urubici e
            vem fornecendo mudas de diversos tipos para Urubici e região desde 1990. </p>
            <p>Iniciamos nossas atividades no fundo de nossa residência, produzindo mudas de eucalipto e pinus em laminados, confeccionados por nós mesmos.
            Com o aumento da demanda, expandimos nossas atividades para um espaço mais amplo e passamos a produzir as mudas em torrões de argila
            e logo depois em tubetas plásticas.</p>
              
              <span><div className="collapse mt-3 scroll-section" id="saiba-mais" >
              <p>Posteriormente, ampliamos não somente o local de produção e atendimento, mas também a variedade, passando a produzir mudas de hortaliças e flores.
              Nosso método de produção também se adaptou as novas demandas. Passamos a utilizar bandeijas de isopor com o uso de substrato e o cultivo em estufas.</p>
              <p>Hoje trabalhamos com um sistema de parceria com o produtor, onde o mesmo fornece as semente e nossa equipe realiza a produção. 
              Assim que as mudas estão prontas para o plantio, fazemos a entrega ao produtor. O plantio é feito em terra previamente preparada e cultivada
              sob os cuidados do proprietário.</p>
              <p>Atualmente produzimos cerca de 4 milhões de mudas por ano, com a orientação de um engenheiro agrônomo e técnico agrícola, José Eriton, que é também 
              proprietário do Viveiro Agriflorestal.</p>
              </div></span>
              <a
                className="btn"
                data-bs-toggle="collapse"
                href="#saiba-mais"
                aria-expanded="false"
                aria-controls="collapseExample"
                id="saiba-mais-button"
                onClick={toggleBtn}
              >
                {isReadMoreShown? 'Ver menos': 'Saiba Mais'}
              </a>
            </div>
          </div>
          <div id="video" className="container ratio ratio-16x9 mb-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3wG4ngW7k7w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <p className="content text-center"><i className="fas fa-ellipsis-h" id="separator-two"></i></p>
        </div>
      </section>
    )
  }


