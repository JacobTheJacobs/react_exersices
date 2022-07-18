import * as React from "react";

import "./styles.css";
export default class Forms1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
            firstName: "",
            lastName: "",
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.firstName.length>0 && this.state.lastName.length > 0) {
        const { firstName, lastName } = this.state;
        const person = {
            firstName,
            lastName,
        };
        this.setState((prev) => ({
            persons: [...prev.persons, person],
            firstName: "",
            lastName: "",
        }));
    }else{
        return;
    }
    };

    handleChange = (e) => {
        
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    render() {
        return (
            <>
            <h1 className="title">Person In List</h1>
            <div className="card-body">
                 <form onSubmit={this.handleSubmit}>
                    <div className="card-input-div"> 
                    <label className="card-input-label">First Name:</label>
                    <input value={this.state.firstName} className="card-input" name="firstName" onChange={this.handleChange} />
                    </div>
                   
                    <div className="card-input-div">  
                    <label className="card-input-label">Last Name:</label>
                    <input   value={this.state.lastName} className="card-input" name="lastName" onChange={this.handleChange} />
                    </div>
                    <button style={{width: '200px'}} className="card-button">Add</button>
                </form>

                <ul>
                    {this.state.persons.map((person) => (
                        <li className="title">
                            {person.firstName} {person.lastName}
                        </li>
                    ))}
                </ul></div>
               
            </>
        );
    }
}
