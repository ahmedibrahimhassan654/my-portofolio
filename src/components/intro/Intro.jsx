import "./intro.scss";
import { useEffect, useRef } from "react";
const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imagecontainer">
          <img src="assets/myimg.png" alt=" " />
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Ahmed Ibrahim</h1>
          <h3>
            Freelance <span></span>
          </h3>
        </div>
        <a href="#portofolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
