import React, { Fragment } from "react";
import { InView } from "react-intersection-observer";

type CallToActionProps = {
  setCallToActionIsVisible: (inView: boolean) => void;
};

export default class CallToAction extends React.Component<CallToActionProps> {
  render() {
    return (
      <Fragment>
        <InView
          as="div"
          onChange={(inView, entry) => {
            this.props.setCallToActionIsVisible(inView);
          }}
          className="callToAction"
        >
          <h2>Call Us at</h2>
          <a
            className="callToAction__phoneNumber phoneNumber"
            href="tel:503-555-5555"
          >
            503-555-5555
          </a>
          <p>
            For more information on the services and to schedule an appointment.
          </p>
        </InView>
        <style jsx>{`
          /* CallToAction Styling */
          :global(.callToAction) {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 90vw;
            margin: 0 auto;
          }
          .callToAction__phoneNumber {
            display: block;
            border: 1px solid black;
            width: fit-content;
            font-size: 2rem;
            padding: 0.75rem;
            background-color: var(--primary-color-black);
            border-radius: 1rem;
            text-decoration: none;
            /* box-shadow: 0 .5rem 2rem rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23); */
          }
          .callToAction__phoneNumber:hover {
            background: var(--primary-color-dark-gray);
          }
          .callToAction__phoneNumber:active {
            background-color: var(--primary-color-light-gray);
            transform: translateY(1px);
          }
        `}</style>
      </Fragment>
    );
  }
}
