import React, { FunctionComponent } from 'react';

type LayoutProps = {}

const Layout: FunctionComponent<LayoutProps> = ({children}) => (
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
      */

      /* Overarching app styling */
      :root {
        --primary-color-light-gray: #D3D2D7;
        --primary-color-black: #2D2D2D;
        --primary-color-white: white;
        --primary-color-orange: #D7791D;
        --primary-color-dark-gray: #656565;
        --mobile-break-point: 500px;
      }
      body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
          "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
          sans-serif;
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
        color: var(--primary-color-orange);
      }

      /* Header Styling */
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 1rem;
      }
      .header__logo {
        height: calc(4rem + 3vmin);
        width: auto;
        margin: 1rem;
      }
      .header__motto {
        font-size: large;
      }

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
        color: white;
        background-color: var(--primary-color-black);
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
        padding: .5rem;
        background-color: white;
        border: 1px solid white;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
      }
      .serviceRow__textBox {
        display: flex;
        flex-direction:column;
        align-items: flex-start;
        margin: 0 1rem;
      }
      .serviceRow__testimonial {
        display: inline-block;
        border-radius: .5rem;
        background-color: var(--primary-color-white);
        color: var(--primary-color-black);
        width: auto;
        margin-top: 1rem;
        padding: 0px 1rem;
        border: 1px solid black;
        box-shadow: 0 1rem 2rem rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
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

      /* ChromeDivider Styling */
      .chromeOutline {
        position: relative;
        max-block-size: 100vw;
        background: linear-gradient(to right, black, silver, black, silver, black);
        padding: 2px;
      }
      /* Metal look retrieved from http://simurai.com/lab/2011/08/21/brushed-metal */
      .chromeDivider {
        height: 15px;
        background-image: linear-gradient(180deg, hsl(0,0%,78%)  0%, 
            hsl(0,0%,90%) 47%, 
            hsl(0,0%,78%) 53%,
            hsl(0,0%,70%)100%);
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

      /* CallToAction Styling */
      .callToAction {
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
        padding: .75rem;
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

      /* History Styling */
      .history {
        max-width: 90vw;
        margin: 0 auto;
      }

      /* Footer Styling */
      .footer {
        margin: 2rem;
      }
      .socialIcons {
        display: flex;
        flex-direction:row;
        align-items: center;
        justify-content: center;
        margin: 1rem;
      }
      .socialIcon {
        padding: 1rem;
        border-radius: 50%;
        text-align: center;
        fill: var(--primary-color-orange);
        display: inline-block;
      }
      .socialIcon:hover {
        background: var(--primary-color-light-gray);
      }
      .copyrightLine {
        font-size: small;
      }

      /* PhoneNumberBanner Styling */
      .phoneNumberBanner__container {
        display: inherit;
        position: fixed;
        bottom: 0px;
        height: fit-content;
        width: 100vw;
        flex-direction: row-reverse;
        transform: translateY(100%);
        transition: transform 100ms ease-in;
      }
      .phoneNumberBanner__container.slideOut {
        transform: translateY(0%);
      }
      .phoneNumberBanner__container.slideIn {
        transform: translateY(100%);
      }
      .phoneNumberBanner {
        display: flex;
        flex-direction: row-reverse;
        align-items: stretch;
        height: inherit;
        border: 1px solid black;
        background: white;
        border-top-left-radius: 1rem;
      }
      .phoneNumberBanner__phoneNumber {
        font-size: 2rem;
        background-color: var(--primary-color-black);
        border: none;
        margin: .5rem;
        padding: .75rem 0.5rem;
        border-radius: 1rem;
        text-decoration: none;
      }
      .phoneNumberBanner__phoneNumber:hover {
        background: var(--primary-color-dark-gray);
      }
      .phoneNumberBanner__phoneNumber:active {
        background-color: var(--primary-color-light-gray);
        transform: translateY(1px);
      }
      .phoneNumberBanner__callToAction {
        font-size: 1.5rem;
        background-color: white;
        align-self: center;
        margin-left: .5rem;
      }
      @media (max-width: 500px) {
        .phoneNumberBanner {
          width: 100vw;
          border-radius: 0px;
          border-right: none;
          border-left: none;
          border-bottom: none;
          justify-content: center;
        }
        .phoneNumberBanner__phoneNumber {
          font-size: 1.75rem;
        }
        .phoneNumberBanner__callToAction {
          font-size: 1.5rem;
          background-color: white;
          align-self: center;
          margin-left: .5rem;
        }
      }
      /* Very Small Devices */
      @media (max-width: 370px) {
        .phoneNumberBanner__callToAction {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Layout;