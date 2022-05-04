import React from 'react'
import Navbar from './components/navbar';
import Oviveiro from './components/oviveiro';
import Quemsomos from './components/quemsomos';
// import Oqueproduzimos from './components/oqueproduzimos';
import Contato from './components/contato';
import Footer from './components/footer';

function App() {
  return (
    <>
    <div className="Viveiro">
      <Navbar />
      <Oviveiro />
      {/* <Oqueproduzimos /> */}
      {/* <hr /> */}
      <Quemsomos />
      <hr />
      <Contato />
      <hr />
      <Footer />
    </div>
      </>
  );
}

export default App;
