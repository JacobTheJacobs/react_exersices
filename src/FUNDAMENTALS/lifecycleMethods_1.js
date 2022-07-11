import * as React from "react";

import "./styles.css";
export default class LifeCycle1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
        };
    }

    componentDidUpdate() {}

    changeColor = () => {
        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        randomColor = "#" + randomColor;

        this.setState({
            color: randomColor,
        });
    };

    render() {
        return (
            <div
                style={{
                    backgroundColor: this.state.color,
                    height: "800px",
                }}
            >
                <button
                    style={{ margin: "auto", display: "block " }}
                    onClick={this.changeColor}
                >
                    Button color
                </button>
            </div>
        );
    }
}
