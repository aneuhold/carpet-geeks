import React from 'react';
import './App.css';
import './components/ServiceRow';
import ServiceRow from './components/ServiceRow';
import ChromeDivider from './components/ChromeDivider';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import logo from './resources/logo.jpg';
import History from './components/History';

/**
 * When the page first starts up, the phone number will show up at the bottom. 
 * After the page reaches the phone number section, it will shrink away. 
 */
class App extends React.Component {
  constructor(props) {
    super(props);

    // Intersection observer setup
    this.callToActionRef = React.createRef();
    const thresholdArray = new Array(11).fill(0).map((v, i) => i * 0.1);
    const intersectionObserverCallback = entries => {
      console.log(entries);
    }
    this.observer = new IntersectionObserver(intersectionObserverCallback, {
      // Root left blank so that it defaults to the viewport
      threshold: thresholdArray
    })
  }

  componentDidMount() {
    this.observer.observe(this.callToActionRef.current);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <img
            className="header__logo"
            src={logo}
            alt="Carpet Geeks Logo"
          />
          <span className="header__motto">Smarter than the dirtiest carpets</span>
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
          <CallToAction ref={this.callToActionRef}/>
          <ChromeDivider/>
          <History/>
          <ChromeDivider/>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
