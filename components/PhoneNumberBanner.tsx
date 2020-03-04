import React, { Fragment } from "react";

type PhoneNumberBannerProps = {
  callToActionIsVisible: boolean;
};

/**
 * Used as a simple re-usable component for a service listing on the main page.
 */
class PhoneNumberBanner extends React.Component<PhoneNumberBannerProps> {
  render() {
    return (
      <Fragment>
        <div
          className={
            "phoneNumberBanner__container" +
            (this.props.callToActionIsVisible ? " slideIn" : " slideOut")
          }
        >
          <div className="phoneNumberBanner">
            <a
              href="tel:123-456-7890"
              className="phoneNumberBanner__phoneNumber phoneNumber"
            >
              503-555-5555
            </a>
            <span className="phoneNumberBanner__callToAction">
              CALL NOW <br />
              for inquiries
            </span>
          </div>
        </div>
        <style jsx>{`
          /* PhoneNumberBanner Styling */
          .phoneNumberBanner__container {
            display: inherit;
            position: fixed;
            bottom: 0px;
            height: fit-content;
            width: 100vw;
            flex-direction: row-reverse;
            transform: translateY(100%);
            transition: transform 100ms ease-in;
          }
          .phoneNumberBanner__container.slideOut {
            transform: translateY(0%);
          }
          .phoneNumberBanner__container.slideIn {
            transform: translateY(100%);
          }
          .phoneNumberBanner {
            display: flex;
            flex-direction: row-reverse;
            align-items: stretch;
            height: inherit;
            border: 1px solid black;
            background: white;
            border-top-left-radius: 1rem;
          }
          .phoneNumberBanner__phoneNumber {
            font-size: 2rem;
            background-color: var(--primary-color-black);
            border: none;
            margin: 0.5rem;
            padding: 0.75rem 0.5rem;
            border-radius: 1rem;
            text-decoration: none;
          }
          .phoneNumberBanner__phoneNumber:hover {
            background: var(--primary-color-dark-gray);
          }
          .phoneNumberBanner__phoneNumber:active {
            background-color: var(--primary-color-light-gray);
            transform: translateY(1px);
          }
          .phoneNumberBanner__callToAction {
            font-size: 1.5rem;
            background-color: white;
            align-self: center;
            margin-left: 0.5rem;
          }
          @media (max-width: 500px) {
            .phoneNumberBanner {
              width: 100vw;
              border-radius: 0px;
              border-right: none;
              border-left: none;
              border-bottom: none;
              justify-content: center;
            }
            .phoneNumberBanner__phoneNumber {
              font-size: 1.75rem;
            }
            .phoneNumberBanner__callToAction {
              font-size: 1.5rem;
              background-color: white;
              align-self: center;
              margin-left: 0.5rem;
            }
          }
          /* Very Small Devices */
          @media (max-width: 370px) {
            .phoneNumberBanner__callToAction {
              display: none;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

export default PhoneNumberBanner;
