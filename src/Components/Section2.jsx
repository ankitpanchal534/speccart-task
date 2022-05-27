import React from "react";
import image39 from "./Images/Image39.png";
import image34 from "./Images/image34.png";
import image35 from "./Images/Image35.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

import "./Section2.css";
export default function Section2() {
  return (
    <div className="Section2">
      <div className="section-2-part-1">
        <h3>Home Trial Cart 2.0</h3>
        <h1>
          It’s An Experience! <br />
          Four Frames. Three Lenses. 1Laser
        </h1>

        <div className="section-2-part1-1">
          <button className="try-now-btn">Try Now</button>

          <button className="play-now-btn">
            <BsFillPlayCircleFill className="play-btn" />
          </button>

          <button className="watch-now-btn">Watch Whats New!</button>
        </div>
      </div>
      <div className="section-2-part-2">
        <div className="section-2-images">
          <img src={image35} alt="image35" className="image35" />
          <img src={image39} alt="image39" className="image39" />
          <img src={image34} alt="image34" className="image34" />
        </div>
      </div>
    </div>
  );
}
