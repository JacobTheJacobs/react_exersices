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
            <div>{counter}</div>
            <button onClick={(e) => increment()}>+</button>

            <button onClick={(e) => decrement()}>-</button>

            <button onClick={(e) => clear()}>clear</button>
        </div>
    );
}
