import React from 'react'
import testimonials from '../public/testimonials.json';

type ServiceRowProps = {
  whiteOnBlack: boolean,
  serviceTitle: string,
  serviceDescription: string,
  testimonialID: string
}

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
  }

  render() {
    return (
      <div className={"serviceRow " + (this.props.whiteOnBlack ? "serviceRow--whiteOnBlack" : 
      "serviceRow--blackOnWhite")}>

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
        {this.props.testimonialID !== "noID" && 
          <div className="serviceRow__testimonial">
            <p>{testimonials[this.props.testimonialID].content}</p>
            <h3><span className="serviceRow_testimonialQuotes">"</span>-{testimonials[this.props.testimonialID].userName}</h3>
          </div>
        }
        
      </div>
    );

    
  }
}