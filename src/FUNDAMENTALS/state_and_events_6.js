import * as React from "react";
import { useState } from "react";
import "./styles.css";

//conditional rendirenig
//lifecycle
//forms
export default function StateEvent6() {
    const [toDoList, setToDoList] = useState([""]);
    const [item, setItem] = useState("");

    const addItem = (e) => {
        e.preventDefault();
        setToDoList([...toDoList, item]);
    };

    return (
        <div>
            {item.length>0  ?
             <p>each time the button clicked the item which is not
                 blank gets pushed to the array 
                 in which the item get stored until page gets refreshed</p>:null}
            <h1 className="title">ToDo List</h1>
            <div className="card-body">
            <form onSubmit={(e) => addItem(e)}>
                <input
                    name="input"
                    placeholder="enter task"
                    onChange={(e) => setItem(e.target.value)}
                />
                <button style={{height:"25px"}}className="counter-button"type="submit">add</button>
            </form>
            {toDoList.map((todo, index) => (
                <div key={index}>{todo}</div>
            ))}
            </div>
        </div>
    );
}
