import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";
import { quotes } from "./quotes";

export default function StateEvent1() {
    const [q, setQoute] = useState("");

    const randomQoute = () => {
        const min = 0;
        const max = 6;
        const rand = Math.floor(Math.random() * (max - min + 1)) + min;
        setQoute(quotes[rand]);
    };


    useEffect(() => {}, [q]);
    return (
        <>
            <h1 className="title">Random Quote</h1>
     
            <div className="card-body">
            <h5>Press the button</h5>
            <button className="card-button" onClick={(e) => randomQoute()}>random qoute</button>
            <h5 >
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
