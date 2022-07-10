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
            <h1> {contacts.length} people in the list</h1>

            {contacts.map((c, index) => (
                <div key={index}>
                    <div
                        id={c.uuid}
                        style={{
                            position: "absolute",
                            right: 20,
                            marginTop: "10px",
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
                            position: "relative",
                            width: "50px",
                        }}
                        src={c.image}
                    />
                    <div
                        style={{
                            borderRadius: "50%",
                            position: "relative",
                            width: "50px",
                            left: 70,
                            bottom: 50,
                            fontSize: "150%",
                            fontWeight: "900",
                            color: "blue",
                        }}
                    >
                        {c.name}
                    </div>
                    <div
                        style={{
                            borderRadius: "50%",
                            position: "relative",
                            width: "50px",
                            left: 70,
                            bottom: 40,
                            fontSize: "100%",
                            fontWeight: "900",
                            color: "green",
                        }}
                    >
                        {c.age}
                    </div>
                </div>
            ))}
            <button
                style={{
                    display: "block",
                    margin: "auto",
                    width: "40%",
                }}
                onClick={(e) => {
                    clearAll(e);
                }}
            >
                Clear all
            </button>
        </div>
    );
}
