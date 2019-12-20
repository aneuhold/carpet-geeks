import React from 'react';

/**
 * Used as a simple re-usable component for a service listing on the main page.
 */
class PhoneNumberBanner extends React.Component {
  render() {
    return (
      <div style={{
        display: this.props.callToActionIsVisible ? "none" : "flex",
        position: "fixed",
        bottom: "0px",
        height: "5rem",
        width: "100vw",
        flexDirection: "row-reverse",
      }}>
        <div className="phoneNumberBanner">
          <button className="phoneNumberBanner__phoneNumber phoneNumber">
            503-555-5555
          </button>
          <span className="phoneNumberBanner__callToAction">
            CALL NOW <br/>
            for inquiries
            </span>
        </div>
      </div>
    );
  }
}

export default PhoneNumberBanner;