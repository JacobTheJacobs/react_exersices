import * as React from "react";
import "./styles.css";
import { quotes } from "./quotes";

export default function QouteList() {
    return (
        <div>
            {quotes.map((q, i) => {
                return (
                    <div key={i} style={{ border: "1px solid red" }}>
                        {" "}
                        <p style={{ color: "black" }}>{q.quote}</p>
                        <p style={{ color: "hotpink" }}>{q.cite}</p>
                    </div>
                );
            })}
            <h5>Book componennt by function</h5>
        </div>
    );
}
