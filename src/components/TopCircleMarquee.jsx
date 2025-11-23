import { ReactComponent as Android } from "../assets/icons/android-logo.svg";
import { ReactComponent as Css } from "../assets/icons/css-logo.svg";
import { ReactComponent as Figma } from "../assets/icons/figma-logo.svg";
import { ReactComponent as Flutter } from "../assets/icons/flutter-logo.svg";
import { ReactComponent as Html } from "../assets/icons/html-logo.svg";
import { ReactComponent as Node } from "../assets/icons/node-js-logo.svg";
import { ReactComponent as ReactIcon } from "../assets/icons/react-logo.svg";
import { ReactComponent as Tailwind } from "../assets/icons/tailwind-logo.svg";
import { ReactComponent as Webpack } from "../assets/icons/webpack-logo.svg";
import { ReactComponent as Nest } from "../assets/icons/nest-logo.svg";
import { ReactComponent as Swift } from "../assets/icons/swift-logo.svg";
import { ReactComponent as Vue } from "../assets/icons/vue-js-logo.svg";
import { ReactComponent as Sketch } from "../assets/icons/sketch-logo.svg";
import { ReactComponent as WindowsIcon } from "../assets/icons/windows.svg";
import { ReactComponent as ArrowDown } from "../assets/icons/arrow-down.svg";
import "../styles/responsive/circles_animations.css";
import "../styles/topsectionmarquee.css";

const CircleScrollContainer = () => {
  return (
    <div className="circle-container">
      <div className="circle-first">
        <div className="circle">
          <div className="circle-item circle1" >
            <Android height={30} />
          </div>
          <div className="circle-item circle2">
            <Css height={30} />
          </div>
          <div className="circle-item circle3">
            <Figma height={30} />
          </div>
          <div className="circle-item circle4">
            <Flutter height={30} />
          </div>
          <div className="circle-item circle5">
            <Html height={30} />
          </div>
          <div className="circle-item circle6">
            <Node height={30} />
          </div>
          <div className="circle-item circle7">
            <ReactIcon height={30} />
          </div>
          <div className="circle-item circle9">
            <Tailwind height={25} />
          </div>
          <div className="circle-item circle10">
            <Webpack height={30} />
          </div>
          <div className="circle-item circle11">
            <Nest height={30} />
          </div>
          <div className="circle-item circle12">
            <Swift height={30} />
          </div>
          <div className="circle-item circle13">
            <Vue height={30} />
          </div>
          <div className="circle-item circle14">
            <Sketch height={30} />
          </div>
          <div className="circle-item circle15">
            <WindowsIcon height={25} />
          </div>
        </div>
        <div ></div>
        <div style={{ margin: "auto", height: 20 }} className="arrow-down">
          <ArrowDown
            height={50}
            style={{ margin: "auto", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};

export default CircleScrollContainer;
