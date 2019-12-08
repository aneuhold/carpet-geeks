import React from 'react';
import './App.css';
import './components/ServiceRow';
import ServiceRow from './components/ServiceRow';
import ChromeDivider from './components/ChromeDivider';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import logo from './resources/logo.jpg';
import History from './components/History';
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
        <ServiceRow 
          serviceTitle="Encapsulation Carpet Cleaning" 
          serviceDescription="Test Description"
          whiteOnBlack={false}
        />
        <ServiceRow 
          serviceTitle="Tile & Grout Restoration" 
          serviceDescription="Test Description"
          whiteOnBlack={true}
        />
        <ServiceRow 
          serviceTitle="Stain Removal" 
          serviceDescription="Test Description"
          whiteOnBlack={false}
        />
        <ServiceRow 
          serviceTitle="Medical Sanitizing" 
          serviceDescription="Test Description"
          whiteOnBlack={true}
        />
        <ServiceRow 
          serviceTitle="Mildew Treatment" 
          serviceDescription="Test Description"
          whiteOnBlack={false}
        />
        <ServiceRow 
          serviceTitle="Pet Stain & Odor Removal" 
          serviceDescription="Test Description"
          whiteOnBlack={true}
        />
        <ServiceRow 
          serviceTitle="Vent & Duct Cleaning" 
          serviceDescription="Test Description"
          whiteOnBlack={false}
        />
        <ServiceRow 
          serviceTitle="Upholstery and Fine Fabric Cleaning" 
          serviceDescription="Test Description"
          whiteOnBlack={true}
        />
        <ServiceRow 
          serviceTitle="Oriental Rug Cleaning" 
          serviceDescription="Test Description"
          whiteOnBlack={false}
        />
        <ServiceRow 
          serviceTitle="Upholstery and Fine Fabric Cleaning" 
          serviceDescription="Test Description"
          whiteOnBlack={true}
        />
        <ServiceRow 
          serviceTitle="Emergency Water Damage Restoration & Drying Service" 
          serviceDescription="Test Description"
          whiteOnBlack={false}
        />
        <ChromeDivider/>
        <CallToAction/>
        <ChromeDivider/>
        <History/>
        <ChromeDivider/>
      </section>
      <Footer/>
    </div>
  );
}
export default App;
