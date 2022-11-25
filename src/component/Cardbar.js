import React from "react";
import image2 from "../image/image1.jpg";
import "aos/dist/aos.css";
import Form from "../component/Form";

const Cardbar = () => {
  return (
    <section className="cardname">
      <div className="container1">
        <div className="formbox" data-aos="fade-down">
          <div>
            <ul>
              <h1>Project Highlights!</h1>
              <hr />
              <li>80% open space with lush landscaping and gardens </li>
              <li>2 and 3 BHK Premium Apartments, 1440 units</li>
              (Phase 1, with 720 apartments)
              <li> Vaastu complaint homes</li>
              <li>Premium Apartments with G+29 Flors</li>
              with a fascinating view of the city
              <li>a clubhouse with a build-up area of 52000 square feet </li>
            </ul>
            <div className="cardbar-form">
              <Form />
            </div>
          </div>
        </div>
        <div className="imgbox1">
          <img src={image2} alt="image2" />
        </div>
      </div>
    </section>
  );
};

export default Cardbar;
