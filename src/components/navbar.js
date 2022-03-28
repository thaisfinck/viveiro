import React from 'react'


export default function Navbar() {
  return (
    <div className="sticky-top bg-white">
      <nav>
      <div className="container">
        <div className="row">
          <div className="col-5 content">
          <img src="logo3.png" className="img-fluid mt-3" width="200px" alt="logo viveiro agriflorestal" id='logo'></img>
          </div>
          <div className="col content pt-5">
            <a href='#oviveiro'>
              <button className="bg-transparent border-0">
              O Viveiro
              </button>
            </a>
          </div>
          <div className="col content pt-5">
            <a href='#quemsomos'>
              <button className="bg-transparent border-0" >
            Quem Somos
              </button>
            </a>
          </div>
          <div className="col-2 content pt-5">
            <a href='#oqueproduzimos'>
              <button className="bg-transparent border-0">
            O Que Produzimos
              </button>
            </a>
          </div>
          <div className="col content pt-5">
            <a href='#contato'>
              <button className="bg-transparent border-0">
            Contato
              </button>
            </a>
          </div>
        </div>
      </div>
      </nav>
    </div>
  )
}
