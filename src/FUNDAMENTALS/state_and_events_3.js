import * as React from "react";
import "./styles.css";


export default class StateEvent3 extends React.Component {
    state = {
        message: "",
    };
//will always take the preveius state and merge it with the new state
//not like the other code that will just replace the value
    render() {
        const message = this.state.message;
        return (
    <><h1 className="title">Message</h1>        <section className="card-body" >
    <input
        type="text"
        placeholder="Enter a message"
        onChange={(e) => {
            const val = e.target.value;

            // look here!!!
            // -----------------------------------
            this.setState((prev) => ({
                message: prev.message + val,
            }));
            // -----------------------------------
        }}
    />
    {this.state.message.length > 0 ? <p>will always take the 
        preveius state and merge it with the new state<br/>not like the other code that will just replace the value</p>:null}
    <p>
        <strong>{message}</strong>
    </p>
</section></>
        );
    }
}
