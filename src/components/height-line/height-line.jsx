import "./height-line.css";



const HeightLine = (props) => {
    return (
        <div className="line" style={props.style}>
            <img className="plane" src={props.pic} alt=""></img>
        </div>
    );
}

export default HeightLine;