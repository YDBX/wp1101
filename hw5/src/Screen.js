
const Screen = (props) => {
    const handleInput = props.handleInput;



    return (
        <div className="screen">
            <div className="formula">
                <h1>{props.formula}</h1>
            </div>
            <div className="result">
                <h1>{props.result}</h1>
            </div>
        </div>
    )
};

export default Screen;