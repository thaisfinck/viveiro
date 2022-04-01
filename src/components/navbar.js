import React from 'react'


export default function Navbar() {
  return (
  <div className="sticky-top bg-white">
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <img src="ico.png" className="img-fluid" width="80px" alt="logo viveiro agriflorestal" id='logo'></img>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10" aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-md-end" id="navbarsExample10">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="p-4 text-dark navlink" href="#oviveiro">O VIVEIRO</a>
          </li>
          <li className="nav-item">
            <a className="p-4 text-dark navlink" href="#quemsomos">QUEM SOMOS</a>
          </li>
          <li className="nav-item">
            <a className="p-4 text-dark navlink" href="#oqueproduzimos">O QUE PRODUZIMOS</a>
          </li>
          <li className="nav-item">
            <a className="p-4 text-dark navlink" href="#contato">CONTATO</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  )
}
