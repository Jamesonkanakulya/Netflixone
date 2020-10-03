import React from "react";
import Slider from "react-slick";

function Footer() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div>
      hello footer
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="footer">
          <h3>1</h3>
        </div>
        <div className="footer">
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Footer;
