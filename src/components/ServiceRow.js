import React from 'react';
import carpetCleaning from '../resources/non-licensed-example-carpet-image.jpg'

/**
 * Used as a simple re-usable component for a service listing on the main page.
 */
export default class ServiceRow extends React.Component {
  constructor(props) {
    super(props);

    // Properties
    this.state = {
      
      // Represents the title of the service offering
      serviceTitle: props.serviceTitle,

      // Represents the description of the service offering
      serviceDescription: props.serviceDescription

    }
  }

  render() {
    return (
      <div className="serviceRow">
        <img
          className="serviceRow__image"
          src={carpetCleaning}
          alt="A carpet being cleaned"
        />
        <div className="serviceRow__textBox">
          <h4>{this.props.serviceTitle}</h4>
          <p>{this.props.serviceDescription}</p>
        </div>
        
      </div>
    );
  }
}