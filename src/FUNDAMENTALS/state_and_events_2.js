import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { quotes } from "./quotes";

export default function StateEvent2() {
    const [q, setQoute] = useState("");
    const [color, setColor] = useState("");

    const createNUmber = () => {
        const min = 0;
        const max = 6;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        setQoute(quotes[rand]);
    };

    const randomColor = () => {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        setColor(color);
    };

    useEffect(() => {}, [q]);
    return (
        <div>
            <button onClick={(e) => createNUmber()}>random qoute</button>

            <button onClick={(e) => randomColor()}>random color</button>

            <h5 style={{ backgroundColor: color }}>
                {q !== "" ? q.quote : null}
            </h5>
        </div>
    );
}
