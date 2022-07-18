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
            <h1 className="title">Click Count</h1>
            <div className="card-body"> 
             <div className="title">{counter}</div>
            <button className="card-button" onClick={(e) => increment()}>Click</button></div>
          
        </div>
    );
}
