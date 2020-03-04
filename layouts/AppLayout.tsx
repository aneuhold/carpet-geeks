import React, { FunctionComponent } from "react";

const Layout: FunctionComponent = ({ children }) => (
  <div>
    {children}
    <style jsx global>{`
      /* Color Pallette */
      /* Generated from Van image here: https://coolors.co/d3d2d7-d7791d-ffffff-2d2d2d-656565 */
      /* 
        Light Gray: #D3D2D7
        Ochre (Orangish): #D7791D
        White
        Charleston Green (Blackish): #2D2D2D
        Granite Gray: #656565
        Green from Van Image, Pear evidently?: #c1bb3f
      */

      /* Overarching app styling */
      :root {
        --primary-color-light-gray: #d3d2d7;
        --primary-color-black: #2d2d2d;
        --primary-color-white: white;
        --primary-brand-color: #c1bb3f;
        --primary-color-orange: #d7791d;
        --primary-color-dark-gray: #656565;
        --mobile-break-point: 600px;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
          "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
          "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: white;
      }
      code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
          monospace;
      }
      .App {
        text-align: center;
        background-image: url("/so-white.png");
        color: var(--primary-color-black);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      .phoneNumber {
        color: var(--primary-brand-color);
      }
    `}</style>
  </div>
);

export default Layout;
