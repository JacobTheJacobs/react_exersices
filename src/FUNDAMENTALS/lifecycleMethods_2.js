import * as React from "react";

import "./styles.css";
// display "Loading ..." for 5 seconds and then display the component..

export default class LifeCycle2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "white",
            loaded: false,
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: true,
            });
            alert(this.loaded);
        }, 5000);
    }

    componentWillUnmount() {
        alert("unmounting");
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
            <>
                {this.loaded ? (
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
                ) : (
                    <h1>Loading</h1>
                )}
            </>
        );
    }
}
