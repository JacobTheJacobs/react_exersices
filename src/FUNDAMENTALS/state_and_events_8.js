import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

//conditional rendirenig
//lifecycle
//forms
export default function StateEvent8() {
    const [contacts, setContacts] = useState([
        {
            uuid: 0,
            name: "Betty",
            age: 83,
            image: "https://lh3.googleusercontent.com/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc=w600",
        },
        {
            uuid: 1,
            name: "Petty",
            age: 83,
            image: "https://media.moddb.com/images/members/5/4550/4549205/duck.jpg",
        },
        {
            uuid: 2,
            name: "Ketty",
            age: 83,
            image: "https://i.pinimg.com/custom_covers/222x/636415059782460318_1594662723.jpg",
        },
        {
            uuid: 3,
            name: "Jetty",
            age: 83,
            image: "http://pm1.narvii.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg",
        },
    ]);

    const clearAll = (e) => {
        setContacts([]);
    };

    const deleteContact = (e) => {
        console.log(e.target.id);
        const filtered = contacts.filter(
            (contact) => contact.uuid != e.target.id
        );
        setContacts([...filtered]);
    };

    return (
        <div>
            <h1 className="title"> {contacts.length} people in the list</h1>

            <div className="card-body">
                {contacts.map((c, index) => (
                    <div
                        key={index}
                        style={{
                            textAlign: "left",
                            marginLeft: "10%",
                            marginTop: "5%",
                        }}
                    >
                        <div
                            id={c.uuid}
                            style={{
                                position: "relative",
                                left: "80%",
                                top: "30px",
                                cursor: "pointer",
                            }}
                            onClick={(e) => {
                                deleteContact(e);
                            }}
                        >
                            X
                        </div>{" "}
                        <img
                            style={{
                                borderRadius: "50%",
                                width: "70px",
                                height: "70px",
                                boxShadow: "0px 0px 10px #000",
                            }}
                            src={c.image}
                            className="list-img"
                        />
                        <div
                            style={{
                                position: "relative",
                                bottom: "60px",
                                left: "90px",
                                fontWeight: "bold",
                                fontSize: "1.2rem",
                                color: "rgb(2, 101, 134)",
                            }}
                        >
                            {c.name}
                        </div>
                        <div
                            style={{
                                position: "relative",
                                bottom: "60px",
                                left: "90px",
                                color: "grey",
                            }}
                        >
                            {c.age}
                        </div>
                    </div>
                ))}
                <button
                    className="card-button"
                    style={{ width: "80%" }}
                    onClick={(e) => {
                        clearAll(e);
                    }}
                >
                    Clear all
                </button>
            </div>
        </div>
    );
}
