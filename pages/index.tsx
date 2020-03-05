import React from "react";
import Layout from "../layouts/AppLayout";
import ServiceRow from "../components/ServiceRow";
import ChromeDivider from "../components/ChromeDivider";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import History from "../components/History";
import PhoneNumberBanner from "../components/PhoneNumberBanner";
import Head from "next/head";

type AppProps = {};
type AppState = {
  callToActionIsVisible: boolean;
};

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      // Used to show and hide the phone number banner at the bottom of the page
      callToActionIsVisible: false
    };
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
    });
  }

  render() {
    // Set up the logo image so it is optimized
    const imageLogoSrcSet = require(`../images/logo.jpg?resize`).srcSet;

    return (
      <Layout>
        <div className="App">
          <Head>
            <title>Carpet Geeks - Carpet Cleaning Service</title>
          </Head>

          <header className="header">
            <picture>
              <source srcSet={imageLogoSrcSet} type="image/webp" />
              <source
                srcSet={require(`../images/logo.jpg`)}
                type="image/jpeg"
              />
              <img
                className="header__logo"
                src={require(`../images/logo.jpg`)}
                alt="A carpet being cleaned"
              />
            </picture>
            <span className="header__motto">
              Smarter than the dirtiest carpets
            </span>
          </header>
          <section>
            {/* This will be a section for each service offering */}
            <ChromeDivider />
            <ServiceRow
              serviceTitle="Truck Mount Carpet Steam Cleaning"
              serviceDescription="Test Description"
              whiteOnBlack={true}
              testimonialID="Ibu9p6-QMDj6YcB9CPqi0w"
              imgName="carpetSteamCleaning"
            />
            <ServiceRow
              serviceTitle="Encapsulation Carpet Cleaning"
              serviceDescription="Test Description"
              whiteOnBlack={false}
              testimonialID="rue6RKvykZhAYS3LEGlPEw"
            />
            <ServiceRow
              serviceTitle="Tile & Grout Restoration"
              serviceDescription="Test Description"
              whiteOnBlack={true}
              testimonialID="KGG_dcaO3jejKfXYCKD5jQ"
              imgName="tileAndGroutCleaning2"
            />
            <ServiceRow
              serviceTitle="Stain Removal"
              serviceDescription="Test Description"
              whiteOnBlack={false}
              testimonialID="R20vLw8JU80krBtxh0ihKg"
              imgName="stainRemovalBeforeAfter"
            />
            <ServiceRow
              serviceTitle="Medical Sanitizing"
              testimonialID="fOmvp8iRSSlWRJhoSLVd8w"
              serviceDescription="Test Description"
              whiteOnBlack={true}
            />
            <ServiceRow
              serviceTitle="Mildew Treatment"
              serviceDescription="Test Description"
              testimonialID="IOB11QGS"
              whiteOnBlack={false}
            />
            <ServiceRow
              serviceTitle="Pet Stain & Odor Removal"
              serviceDescription="Test Description"
              whiteOnBlack={true}
              testimonialID="petDamage1"
              imgName="petStainRemoval"
            />
            <ServiceRow
              serviceTitle="Vent & Duct Cleaning"
              serviceDescription="Test Description"
              testimonialID="y2pd6_"
              whiteOnBlack={false}
            />
            <ServiceRow
              serviceTitle="Oriental Rug Cleaning"
              serviceDescription="Test Description"
              whiteOnBlack={true}
              testimonialID="KlyAFoMFGQrEcf"
              imgName="orientalRugCleaning"
            />
            <ServiceRow
              serviceTitle="Upholstery and Fine Fabric Cleaning"
              serviceDescription="Test Description"
              testimonialID="NNRI9E7upjH30TWMqwAjew"
              whiteOnBlack={false}
              imgName="upholsteryCleaning"
            />
            <ServiceRow
              serviceTitle="Emergency Water Damage Restoration & Drying Service"
              serviceDescription="Test Description"
              testimonialID="mG2Z_XqT6Zg0aONRGM55Q"
              whiteOnBlack={true}
            />
            <ChromeDivider />
            <CallToAction
              setCallToActionIsVisible={this.setCallToActionIsVisible}
            />
            <ChromeDivider />
            <History />
            <ChromeDivider />
          </section>
          <PhoneNumberBanner
            callToActionIsVisible={this.state.callToActionIsVisible}
          />
          <Footer />
          <style jsx>{`
            /* Header Styling */
            .header {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin: 1rem;
            }
            .header__logo {
              height: calc(4rem + 3vmin);
              width: auto;
              margin: 1rem;
            }
            .header__motto {
              font-size: large;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default App;
