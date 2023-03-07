import HeightLine from "../height-line/height-line";
import "./markup.css";

import leftPlane from  "../../assets/images/a350-left-sm.png";
import rightPlane from  "../../assets/images/a350-right-sm.png";

const upHeightLine = {
    position: "relative",
    borderBottom: "4px dashed black",
    marginBottom: "100px"
};

const downHeightLine = {
    position: "relative",
    borderTop: "4px dashed black",
    alignItems: "end"
}

const CreateBlocks = () => {
    return (
        <div className="wrapper">
            <div className="screen">
                <HeightLine style={upHeightLine} pic={leftPlane}/>
                <HeightLine style={downHeightLine} pic={rightPlane}/>
            </div>
            <div className="footer"/>
        </div>
    );
}

export default CreateBlocks;