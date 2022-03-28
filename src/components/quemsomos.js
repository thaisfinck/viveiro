import React from 'react'

export default function Quemsomos() {
  return (
    <section className="container">
       <h1 id='quemsomos' className='title'><strong>Quem Somos</strong></h1>
        <p className='content'>Nome e fotos das pessoas.</p>
        <p className='content'>Nosso pessoal e formado de pessoas com muita experiencia no ramo
         e nosso trabalho e sempre feito com muita alegria e satisfacao.</p>
         <div className="text-center">
         <img id='quemsomos-img' className='img-fluid mt-3 mb-3' src='bruno.jpeg' alt='foto interna de um viveiro de mudas'></img>
         </div>
    </section>
  )
}
