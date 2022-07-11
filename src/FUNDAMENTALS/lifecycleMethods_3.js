import * as React from "react";

import "./styles.css";

export default class LifeCycle3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: {
                m: 2,
                s: 0,
            },
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            const { m, s } = this.state.time;
            if (s === 0) {
                if (m === 0) {
                    clearInterval(this.interval);
                    this.setState({
                        time: {
                            m: "Time is",
                            s: "UP",
                        },
                    });
                } else {
                    this.setState((prev) => ({
                        time: {
                            m: prev.time.m - 1,
                            s: 59,
                        },
                    }));
                }
            } else {
                this.setState((prev) => ({
                    time: {
                        m: prev.time.m,
                        s: prev.time.s - 1,
                    },
                }));
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1>Time Remaning</h1>
                <h2>
                    {this.state.time.m}:{this.state.time.s}
                </h2>
            </>
        );
    }
}
