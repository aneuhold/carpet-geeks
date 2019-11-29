import React from 'react';
import './App.css';
import './components/ServiceRow';
import ServiceRow from './components/ServiceRow';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3 className="header__businessName">Carpet Geeks</h3>
        <span>The best cleaner out there... Or a motto here :)</span>
      </header>
      <section>

        {/* This will be a section for each service offering */}
        <ServiceRow 
          serviceTitle="Truck Mount Carpet Steam Cleaning" 
          serviceDescription="Test Description"
        />
        <hr className="horizontalBarrier"/>
        <ServiceRow 
          serviceTitle="Encapsulation Carpet Cleaning" 
          serviceDescription="Test Description"
        />
        <hr className="horizontalBarrier"/>
        <ServiceRow 
          serviceTitle="Tile & Grout Restoration This is a longer title" 
          serviceDescription="Test Description"
        />

      </section>
      <Footer/>
    </div>
  );
}
export default App;
