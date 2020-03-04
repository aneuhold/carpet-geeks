import React from "react";

/**
 * Used as a simple re-usable component for the Chrome Divider
 */
export default class ChromeDivider extends React.Component {
  render() {
    return (
      <div className="chromeOutline">
        <div className="chromeDivider">
          <div className="chromeDivider__leftBolt" />
          <div className="chromeDivider__rightBolt" />
        </div>
        <style jsx>{`
          /* ChromeDivider Styling */
          .chromeOutline {
            position: relative;
            max-block-size: 100vw;
            background: linear-gradient(
              to right,
              black,
              silver,
              black,
              silver,
              black
            );
            padding: 2px;
          }
          /* Metal look retrieved from http://simurai.com/lab/2011/08/21/brushed-metal */
          .chromeDivider {
            height: 15px;
            background-image: linear-gradient(
              180deg,
              hsl(0, 0%, 78%) 0%,
              hsl(0, 0%, 90%) 47%,
              hsl(0, 0%, 78%) 53%,
              hsl(0, 0%, 70%) 100%
            );
          }
          .chromeDivider__leftBolt {
            position: absolute;
            background-image: url("/screw-head-opt.svg");
            top: 2px;
            left: 5px;
            width: 15px;
            height: 15px;
          }
          .chromeDivider__rightBolt {
            position: absolute;
            background-image: url("/screw-head-opt.svg");
            background-repeat: no-repeat;
            top: 2px;
            right: 5px;
            width: 15px;
            height: 15px;
          }
        `}</style>
      </div>
    );
  }
}
