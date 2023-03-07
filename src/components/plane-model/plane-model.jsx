import "./plane-model.css";

import leftPlaneImg from  "../../assets/images/a350-left-sm.png";
import rightPlaneImg from  "../../assets/images/a350-right-sm.png";

const LeftPlane = () => {

    return (
        <img src={leftPlaneImg} alt="left plane" className="leftPlane"></img>
    );
}

const RightPlane = () => {

    return (
        <img src={rightPlaneImg} alt="right plane" className="rightPlane"></img>
    );
}

export {LeftPlane, RightPlane};