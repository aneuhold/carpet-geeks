import React from 'react';
import './App.css';
import './components/ServiceRow';
import ServiceRow from './components/ServiceRow';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Carpet Geeks</h3>
      </header>
      <section>

        {/* This will be a section for each service offering */}
        <ServiceRow serviceTitle="Test title" serviceDescription="Test Description"/>

      </section>
      <Footer/>
    </div>
  );
}
export default App;
