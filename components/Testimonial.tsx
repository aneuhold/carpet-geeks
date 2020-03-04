import React from "react";
import testimonials from "../public/testimonials.json";

type TestimonialProps = {
  testimonialID: string;
};

export default class Testimonial extends React.Component<TestimonialProps> {
  render() {
    const testimonial = testimonials[this.props.testimonialID];
    return (
      <React.Fragment>
        <div className="testimonial">
          <p className="quote">{testimonial.content}</p>

          <h3>
            <i className="fas fa-quote-right"></i> - {testimonial.userName}
          </h3>
        </div>
        <style jsx>{`
          .testimonial {
            display: inline-block;
            border-radius: 0.5rem;
            background-color: white;
            color: black;
            width: auto;
            margin-top: 1rem;
            padding: 0px 1rem;
            border: 1px solid black;
            box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.19),
              0 6px 6px rgba(0, 0, 0, 0.23);
          }
        `}</style>
      </React.Fragment>
    );
  }
}
