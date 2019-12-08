import React from 'react';

/**
 * Used as a simple re-usable component for the Chrome Divider
 */
export default class ChromeDivider extends React.Component {
  render() {
    return (
      <div className="chromeOutline">
        <div className="chromeDivider">
          <div className="chromeDivider__leftBolt"/>
          <div className="chromeDivider__rightBolt"/>
        </div>
      </div>
      
    );
  }
}