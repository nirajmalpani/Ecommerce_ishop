import React from "react";

import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./SlideProduct.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

/**
 * @author
 * @function SlideProduct
 **/

const SlideProduct = (props) => {
  return (
    <div className="Slideshoww">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
        <Item>
          <div className="slideshow_image">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHNldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
              alt="headset"
            ></img>
          </div>
          <div className="slideshow_text">
            <h3>Headset yellow</h3>
            <h4>&#9733;&#9733;&#9733;&#9733; </h4>
            <h5>$499</h5>
          </div>
        </Item>
      </Carousel>
    </div>
  );
};

export default SlideProduct;
