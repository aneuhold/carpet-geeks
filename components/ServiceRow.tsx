import React, { Fragment } from "react";
import Testimonial from "./Testimonial";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

type ServiceRowProps = {
  whiteOnBlack: boolean;
  serviceTitle: string;
  serviceDescription: string;
  testimonialID: string;
  imgSrc: string;
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
    testimonialID: "noID",

    // If this is set to "none", then the image is left out and it is formatted differently
    imgSrc: "none"
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
          {/* If an image is not provided */}
          {this.props.imgSrc === "none" ? (
            <div className="serviceRow__textBox--centered">
              <h3>{this.props.serviceTitle}</h3>
              <p>{this.props.serviceDescription}</p>
            </div>
          ) : (
            /* If an image is provided */
            <div className="serviceRow__content">
              <div className="zoomContainer gridLeftSide">
                <Zoom>
                  <img
                    className="serviceRow__image"
                    src={this.props.imgSrc}
                    alt="A carpet being cleaned"
                  />
                </Zoom>
              </div>
              <div className="serviceRow__textBox">
                <h3>{this.props.serviceTitle}</h3>
                <p>{this.props.serviceDescription}</p>
              </div>
            </div>
          )}

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
            grid-template-columns: 1fr 1fr;
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
          .gridLeftSide {
            justify-self: end;
          }
          .zoomContainer {
            max-width: 85%;
            width: auto;
          }

          .serviceRow__image {
            width: 15rem;
            padding: 0px;
            margin: 0.1rem;
            border-radius: 8px;
            border: 1px solid black;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
            padding: 0.5rem;
            background-color: white;
          }
          .serviceRow__textBox {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            margin: 0 1rem;
          }
          .serviceRow__textBox--centered {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
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
          @media (max-width: 600px) {
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
            .zoomContainer {
              align-self: center;
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
