import React, { Fragment } from "react";
import Testimonial from "./Testimonial";

type ServiceRowProps = {
  whiteOnBlack: boolean;
  serviceTitle: string;
  serviceDescription: string;
  testimonialID: string;
};

/**
 * Used as a simple re-usable component for a service listing on the main page.
 */
export default class ServiceRow extends React.Component<ServiceRowProps> {
  static defaultProps = {
    // Represents the title of the service offering
    serviceTitle: "Title not found",

    // Represents the description of the service offering
    serviceDescription: "Default description",

    // Determines if the service row should be black on white or white on black
    whiteOnBlack: true,

    // Determines the id of the testimonial to use
    testimonialID: "noID"
  };

  render() {
    return (
      <Fragment>
        <div
          className={
            "serviceRow " +
            (this.props.whiteOnBlack
              ? "serviceRow--whiteOnBlack"
              : "serviceRow--blackOnWhite")
          }
        >
          {/* serviceRow__content class used for styling purposes */}
          <div className="serviceRow__content">
            <img
              className="serviceRow__image"
              src="/non-licensed-example-carpet-image.jpg"
              alt="A carpet being cleaned"
            />
            <div className="serviceRow__textBox">
              <h3>{this.props.serviceTitle}</h3>
              <p>{this.props.serviceDescription}</p>
            </div>
          </div>
          {this.props.testimonialID !== "noID" ? (
            <Testimonial testimonialID={this.props.testimonialID} />
          ) : (
            ""
          )}
        </div>
        <style jsx>{`
          /* ServiceRow Styling */
          .serviceRow {
            width: 100vw;
            padding: 1rem 0px;
          }
          .serviceRow__content {
            display: grid;
            grid-template-columns: 50% auto;
          }
          .serviceRow--whiteOnBlack {
            color: black;
            background-color: var(--primary-color-light-gray);
            /*background: linear-gradient(270deg,var(--primary-color-black), var(--primary-color-black), --primary-color-light-gray);*/
          }
          /* The background for blackOnWhite is the default background */
          .serviceRow--blackOnWhite {
            color: var(--primary-color-black);
          }
          .serviceRow__image {
            max-width: 85%;
            width: 15rem;
            justify-self: end;
            height: auto;
            border-radius: 8px;
            padding: 0.5rem;
            background-color: white;
            border: 1px solid black;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
          }
          .serviceRow__textBox {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 1rem;
          }
          .serviceRow__testimonial {
            display: inline-block;
            border-radius: 0.5rem;
            background-color: var(--primary-color-white);
            color: var(--primary-color-black);
            width: auto;
            margin-top: 1rem;
            padding: 0px 1rem;
            border: 1px solid black;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
          }
          .serviceRow__testimonialQuotes {
            font-size: 5rem;
          }

          /* Large Desktops */
          @media (min-width: 1100px) {
            .serviceRow--whiteOnBlack {
              max-width: 1000px;
              margin: auto;
              border-radius: 1rem;
            }
          }
          /* Mobile Devices */
          @media (max-width: 500px) {
            .serviceRow {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .serviceRow__content {
              width: 90vw;
              display: flex;
              flex-direction: column;
              align-items: left;
            }
            .serviceRow__image {
              background: white;
              border: 1px solid black;
              align-self: center;
            }
          }
          .serviceRow--blackOnWhite .serviceRow__image {
            border: 1px solid var(--primary-color-black);
          }
        `}</style>
      </Fragment>
    );
  }
}
