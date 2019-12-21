import React from 'react';

/**
 * Used as a simple re-usable component for a service listing on the main page.
 */
class PhoneNumberBanner extends React.Component {
  render() {
    return (
      <div className={'phoneNumberBanner__container' + (this.props.callToActionIsVisible ? ' slideIn' : ' slideOut')}>
        <div className="phoneNumberBanner">
          <a 
            href="tel:123-456-7890" 
            className="phoneNumberBanner__phoneNumber phoneNumber"
          >
            503-555-5555
          </a>
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