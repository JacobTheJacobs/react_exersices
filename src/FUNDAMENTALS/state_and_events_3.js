import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { quotes } from "./quotes";

export default class StateEvent3 extends React.Component {
    state = {
        message: "",
    };

    render() {
        const message = this.state.message;
        return (
            <section className="message">
                <input
                    type="text"
                    placeholder="Enter a message"
                    onChange={(e) => {
                        const val = e.target.value;

                        // look here!!!
                        // -----------------------------------
                        this.setState((prev) => ({
                            message: prev.message + val,
                        }));
                        // -----------------------------------
                    }}
                />
                <p>
                    <strong>{message}</strong>
                </p>
            </section>
        );
    }
}
