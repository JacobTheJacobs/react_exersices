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
                <form onSubmit={this.handleSubmit}>
                    <input name="firstName" onChange={this.handleChange} />
                    <input name="lastName" onChange={this.handleChange} />
                    <button>Add</button>
                </form>

                <ul>
                    {this.state.persons.map((person) => (
                        <li>
                            {person.firstName} {person.lastName}
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
