import * as React from "react";
import { useState } from "react";
import "./styles.css";

export default function StateEvent4() {
    const [counter, setCounter] = useState(0);

    // useEffect(() => {}, [q]);

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <div>{counter}</div>
            <button onClick={(e) => increment()}>Click</button>
        </div>
    );
}
