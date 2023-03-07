import "./screen.css";

import LeftPlaneZone from "../left-plane-zone/left-plane-zone";
import RightPlaneZone from "../right-plane-zone/right-plane-zone";

function Screen() {
    return ( 
        <div className = "screen">
            <LeftPlaneZone />
            <RightPlaneZone />
        </div>
    );
}

export default Screen;