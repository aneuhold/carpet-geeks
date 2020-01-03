import React from 'react';
import Layout from '../layouts/AppLayout';
import ServiceRow from '../components/ServiceRow';
import ChromeDivider from '../components/ChromeDivider';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import History from '../components/History';
import PhoneNumberBanner from '../components/PhoneNumberBanner';

type AppProps = {}
type AppState = {
  callToActionIsVisible: boolean
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
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
  setCallToActionIsVisible(isVisible: boolean) {
    this.setState({
      callToActionIsVisible: isVisible
    })
  }

  render() {
    return (
      <Layout>
        <div className="App">

        <header className="header">
          <img
            className="header__logo"
            src="/logo.jpg"
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
            testimonialID="exampleTestimonialID"
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
      </Layout>
      
    );
  }
}

export default App;
