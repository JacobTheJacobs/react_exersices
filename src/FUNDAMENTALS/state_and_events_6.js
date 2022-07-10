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
            <h1>TODO LIST</h1>
            <form onSubmit={(e) => addItem(e)}>
                <input
                    name="input"
                    placeholder="enter task"
                    onChange={(e) => setItem(e.target.value)}
                />
                <button type="submit">add</button>
            </form>
            {toDoList.map((todo, index) => (
                <div key={index}>{todo}</div>
            ))}
        </div>
    );
}
