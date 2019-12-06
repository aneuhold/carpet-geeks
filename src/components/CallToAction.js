import React from 'react';

/**
 * Used as a simple re-usable component for a service listing on the main page.
 */
export default class ChromeDivider extends React.Component {
  render() {
    return (
      <div className="callToAction">
        <h2>Call Mike at</h2>
        <h1>503-555-5555</h1>
        <p>For more information on the services and to schedule an appointment.</p>
      </div>
      
    );
  }
}