import * as React from "react";
import "./styles.css";
export default class LifeCycle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
        };
    }

    changeColor = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        randomColor = "#" + randomColor;

        this.setState({
            color: randomColor,
        });
    };

    render() {
        return (
            <div><h1 className="title"> Body BG</h1>
            <div    className="card-body">
                
                <div
             
                style={{
                    backgroundColor: this.state.color,
                    height: "400px",
                }}
            >
                <button
                    className="card-button"
                    onClick={this.changeColor}
                >
                    Button color
                </button>
            </div>
            </div>   </div>
           
        );
    }
}
