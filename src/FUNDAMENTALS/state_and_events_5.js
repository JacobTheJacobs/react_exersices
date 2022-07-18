import * as React from "react";
import { useState } from "react";
import "./styles.css";

export default function StateEvent5() {
    const [counter, setCounter] = useState(0);

    // useEffect(() => {}, [q]);

    const increment = () => {
        setCounter(counter + 1);
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const clear = () => {
        setCounter(0);
    };
    return (
        <div>
            <h1 className="title">Simple Counter</h1>
            <div className="card-body">
            <div className="title">{counter}</div>
            <button className="counter-button" onClick={(e) => increment()}>+</button>

            <button className="counter-button" onClick={(e) => decrement()}>-</button>

            <button className="counter-button" onClick={(e) => clear()}>clear</button>
            </div>
        </div>
    );
}
