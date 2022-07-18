import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { quotes } from "./quotes";

export default function StateEvent2() {
    const [q, setQoute] = useState("");
    const [color, setColor] = useState("");

    const randomQoute = () => {
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
<>
<h1 className="title">Button BG</h1>

<div className="card-body">
<h5>Press the button</h5>

<button className="card-button" onClick={(e) => randomColor()}>random color</button><br/><br/>
<button className="card-button" onClick={(e) => randomQoute()}>random qoute</button>
<h5  style={{backgroundColor:color}}>
    {q !== "" ? <div className="card-text">
        <div >
            {q.quote}</div>
            <div style={{fontWeight: "bold"}}>-{q.cite}</div>
            </div> : null}
</h5>
</div>
</>
    );
}
