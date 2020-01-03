import React from 'react';
import { InView } from 'react-intersection-observer'

type ChromeDividerProps = {
  setCallToActionIsVisible: (inView: boolean) => void,
}

/**
 * Used as a simple re-usable component for a service listing on the main page.
 */
export default class ChromeDivider extends React.Component<ChromeDividerProps> {
  render() {
    return (
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
        <p>For more information on the services and to schedule an appointment.</p>
      </InView>
    );
  }
}