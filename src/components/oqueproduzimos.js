import React from 'react'

export default function Oqueproduzimos() {
  return (
    <section id='oqueproduzimos' className="container">
      <h1 className='title'><strong>O que produzimos</strong></h1>
      <p className="content">Produzimos todos os tipos de plantinhas e elas sao bem boas!</p>
        <div className="container mt-3 mb-3">
          <div className="row">
            <div className="col">
            <div className="card" style={{width: 250, height: 330}}>
                <img src="lettuce.jpeg" className="card-img-top" alt="alface" style={{width: 248, height: 150}}></img>
                <div className="card-body">
                  <h5 className="card-title content">Alface</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card" style={{width: 250, height: 330}}>
                <img src="lettuce.jpeg" className="card-img-top" alt="alface" style={{width: 248, height: 150}}></img>
                <div className="card-body">
                  <h5 className="card-title content">Cebola</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card" style={{width: 250, height: 330}}>
                <img src="lettuce.jpeg" className="card-img-top" alt="alface" style={{width: 248, height: 150}}></img>
                <div className="card-body">
                  <h5 className="card-title content">Cenoura</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="col">
            <div className="card" style={{width: 250, height: 330}}>
                <img src="lettuce.jpeg" className="card-img-top" alt="alface" style={{width: 248, height: 150}}></img>
                <div className="card-body">
                  <h5 className="card-title content">Couve</h5>
                  <p className="card-text content">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}
