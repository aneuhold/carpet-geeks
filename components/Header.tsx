import React, { Fragment } from "react";
import { InView } from "react-intersection-observer";
import ChromeDivider from "../components/ChromeDivider";

// Set up the logo image so it is optimized
const imageLogoSrcSet = require(`../images/logo.jpg?resize`).srcSet;

type HeaderProps = {
  setBannerIsOpen: (isOpen: boolean) => void;
  bannerIsOpen: boolean;
  headerHasShrunkOnce: boolean;
};

/* Heights for the CSS */
const expandedHeaderHeight: string = "height: calc(6rem + 3vmin);";
const shrunkHeaderHeight: string = "height: calc(3rem + 2vmin);";

export default class Header extends React.Component<HeaderProps> {
  render() {
    return (
      <Fragment>
        <InView
          className="headerViewBox"
          as="div"
          onChange={(inView, entry) => {
            this.props.setBannerIsOpen(inView);
          }}
        >
          <div></div>
        </InView>
        <header
          className={
            this.props.bannerIsOpen
              ? this.props.headerHasShrunkOnce
                ? "header expandHeader"
                : "header"
              : "header shrinkHeader"
          }
        >
          <picture className="logoContainer">
            <source srcSet={imageLogoSrcSet} type="image/webp" />
            <source srcSet={require(`../images/logo.jpg`)} type="image/jpeg" />
            <img
              className="logo"
              src={require(`../images/logo.jpg`)}
              alt="A carpet being cleaned"
            />
          </picture>
          <span
            className={
              this.props.bannerIsOpen
                ? this.props.headerHasShrunkOnce
                  ? "motto showMotto"
                  : "motto"
                : "motto hideMotto"
            }
          >
            Smarter than the dirtiest carpets
          </span>
        </header>
        <style jsx>{`
          /* Header Styling */
          :global(.header) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: fixed;
            width: 100vw;
            ${expandedHeaderHeight}
            top: 0;
            background-color: white;
            z-index: 2;
          }
          :global(.headerViewBox) {
            width: 100vw;
            ${expandedHeaderHeight}
          }
          .headerBoundingBox {
            position: absolute;
            top: 0;
          }
          .logoContainer {
            min-width: 0;
            min-height: 0;
            flex-shrink: 1;
            /*height: calc(4rem + 3vmin);*/
          }
          .logo {
            min-width: 0;
            min-height: 0;
            height: 100%;
            width: auto;
            /* height: inherit; */
            /*height: calc(4rem + 3vmin);*/
          }
          .motto {
            flex-shrink: 1;
            font-size: large;
            margin: 0.5rem;
          }
          .shrinkHeader {
            animation: shrinkHeader;
            border-bottom: 2px solid var(--primary-color-black);
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }
          .expandHeader {
            animation: expandHeader;
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }
          .hideMotto {
            /* display: none; */
            animation: hideMotto;
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }
          .showMotto {
            animation: showMotto;
            animation-duration: 1s;
            animation-fill-mode: forwards;
          }

          @keyframes hideMotto {
            0% {
              opacity: 1;
              height: 2rem; /* This seems to be the right starting height */
              margin: 0.5rem;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 0;
              height: 0rem;
              margin: 0;
              transform: translateY(-5vw);
            }
          }

          @keyframes showMotto {
            0% {
              opacity: 0;
              height: 0rem;
              margin: 0rem;
              transform: translateY(-5vw);
            }
            50% {
              opacity: 1;
            }
            100% {
              opacity: 1;
              height: 2rem;
              margin: 0.5rem;
            }
          }

          @keyframes shrinkHeader {
            0% {
              ${expandedHeaderHeight}
            }
            100% {
              ${shrunkHeaderHeight}
            }
          }

          @keyframes expandHeader {
            0% {
              ${shrunkHeaderHeight}
            }
            100% {
              ${expandedHeaderHeight}
            }
          }
        `}</style>
      </Fragment>
    );
  }
}
