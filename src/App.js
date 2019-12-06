import React from 'react';
import './App.css';
import './components/ServiceRow';
import ServiceRow from './components/ServiceRow';
import ChromeDivider from './components/ChromeDivider';
import Footer from './components/Footer';
import logo from './resources/logo.jpg';
function App() {
  return (
    <div className="App">
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="Carpet Geeks Logo"
        />
        <span>The best cleaner out there... Or a motto here :)</span>
      </header>
      <section>

        {/* This will be a section for each service offering */}
        <ChromeDivider/>
        <ServiceRow 
          serviceTitle="Truck Mount Carpet Steam Cleaning" 
          serviceDescription="Test Description"
          whiteOnBlack={true}
        />
        <ChromeDivider/>
        <ServiceRow 
          serviceTitle="Encapsulation Carpet Cleaning" 
          serviceDescription="Test Description"
          whiteOnBlack={false}
        />
        <ChromeDivider/>
        <ServiceRow 
          serviceTitle="Tile & Grout Restoration This is a longer title" 
          serviceDescription="Test Description"
          whiteOnBlack={true}
        />
        <ChromeDivider/>
        

      </section>
      <Footer/>
    </div>
  );
}
export default App;
