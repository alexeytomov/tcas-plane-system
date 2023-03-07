import HeightLine from "../height-line/height-line";
import "./markup.css";

const upHeightLine = {
    borderBottom: "4px dashed black",
    marginBottom: "100px"
};

const downHeightLine = {
    borderTop: "4px dashed black"
}

const CreateBlocks = () => {
    return (
        <div className="wrapper">
            <div className="screen">
                <HeightLine style={upHeightLine}/>
                <HeightLine style={downHeightLine}/>
            </div>
            <div className="footer"/>
        </div>
    );
}

export default CreateBlocks;