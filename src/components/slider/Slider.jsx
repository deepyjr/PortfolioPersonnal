import React, { useRef } from "react";
import "./Slider.css";
import Glide, { Slide } from 'react-glidejs';


function Slider() {
    const gliderRef = useRef(null);
  return (
<div
      className="App"
      style={{
        background: 'blue',
      }}
    >
      <Glide
        ref={gliderRef}
        gap={100}
        throttle={0}
        type="slider"
        customSlideAnimation={{
          timeout: 500,
          classNames: 'fade',
        }}
        peek={{
          before: 500,
          after: 500,
        }}
        perView={2}
        startAt={1}
        slideClassName="slider__frame"
        focusAt="center"
       
      >
        <React.Fragment>
          1
        </React.Fragment>
        <React.Fragment>
          2
        </React.Fragment>
        <React.Fragment>
          3
        </React.Fragment>
        <React.Fragment>
          4
        </React.Fragment>
        <React.Fragment>
          5
        </React.Fragment>
        <React.Fragment>
          6
        </React.Fragment>
        <React.Fragment>
          7
        </React.Fragment>
        <React.Fragment>
          8
        </React.Fragment>
        <React.Fragment>
          9
        </React.Fragment>
        <React.Fragment>
          10
        </React.Fragment>
        <React.Fragment>
          11
        </React.Fragment>
        <React.Fragment>
          12
        </React.Fragment>
        <React.Fragment>
          13
        </React.Fragment>
        <React.Fragment>
          14
        </React.Fragment>
      </Glide>
    </div>
  );
}

export default Slider;
