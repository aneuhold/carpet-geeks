import React from 'react';
import './App.css';
import './components/ServiceRow';
import ServiceRow from './components/ServiceRow';
import ChromeDivider from './components/ChromeDivider';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import logo from './resources/logo.jpg';
import History from './components/History';
import PhoneNumberBanner from './components/PhoneNumberBanner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // Used to show and hide the phone number banner at the bottom of the page
      callToActionIsVisible: false
    }
    this.setCallToActionIsVisible = this.setCallToActionIsVisible.bind(this);
  }

  /**
   * Used primarily in the CallToAction component to change if the CallToAction
   * component is visible.
   * 
   * @param {Boolean} isVisible 
   */
  setCallToActionIsVisible(isVisible) {
    this.setState({
      callToActionIsVisible: isVisible
    })
  }

  render() {
    const debuggingOn = false;

    return (
      <div className="App">

        {/* Testing box for visibility */}
        <div style={{
          color:"yellow",
          display: debuggingOn ? "inherit" : "none",
          width: "100px",
          height: "100px",
          position: "fixed",
          right: "0px",
          top: "0px",
          fontSize: "12px",
          backgroundColor: "black",
          zIndex: "2",
          border: "2px solid white"
        }}>
          The callToActionIsVisible variable is currently: {`${this.state.callToActionIsVisible}`}
        </div>

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
          <CallToAction setCallToActionIsVisible={this.setCallToActionIsVisible}/>
          <ChromeDivider/>
          <History/>
          <ChromeDivider/>
        </section>
        <PhoneNumberBanner callToActionIsVisible={this.state.callToActionIsVisible}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
