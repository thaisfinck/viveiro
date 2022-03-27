import React from 'react'


export default function Navbar() {
  return (
    <div class="sticky-top bg-white">
      <nav>
      <div class="container">
        <div class="row">
          <div class="col-5 content">
          <img src="viveiro.png" class="img-fluid mt-3" width="200px" alt="logo viveiro agriflorestal"></img>
          </div>
          <div class="col content pt-4">
            <a href='#oviveiro'>
              <button>
              O viveiro
              </button>
            </a>
          </div>
          <div class="col content pt-4">
            <a href='#quemsomos'>
              <button>
            Quem Somos
              </button>
            </a>
          </div>
          <div class="col-2 content pt-4">
            <a href='#oqueproduzimos'>
              <button>
            O Que Produzimos
              </button>
            </a>
          </div>
          <div class="col content pt-4">
            <a href='#contato'>
              <button>
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
