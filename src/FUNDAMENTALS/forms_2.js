import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

const Modal = ({ handleClose, show, children, addNew, addContact }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [image, setImage] = useState("");

    const showHideClassName = show
        ? "modal display-block"
        : "modal display-none";

    const handleSubmit = (e) => {
        addContact({
            uuid: Math.random(),
            name,
            age,
            image,
        });
        handleClose();
    };

    return (
        <div className={showHideClassName}>
            <section className="modal-main" style={{ height: "200px" }}>
                {addNew ? (
                    <>
                        Name:
                        <input
                            className="add-input"
                            name="name"
                            onChange={(e) => setName(e.target.value)}
                        />
                        Age:
                        <select
                            style={{ marginLeft: "25px" }}
                            className="add-input"
                            onChange={(e) => setAge(e.target.value)}
                            value={age}
                        >
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                        Image:
                        <input
                            className="add-input"
                            name="image"
                            onChange={(e) => setImage(e.target.value)}
                        />
                        <button
                            style={{ width: "90%", margin: "5px" }}
                            className="card-button"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Add
                        </button>
                    </>
                ) : (
                    children
                )}
                <div
                    style={{
                        position: "relative",
                        left: "340px",
                        bottom: "160px",
                        cursor: "pointer",
                    }}
                    onClick={(e) => {
                        handleClose();
                    }}
                >
                    X
                </div>{" "}
            </section>
        </div>
    );
};

//lifecycle
//forms
export default function Forms2() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [addNew, setaddNew] = useState(false);
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

    const toggle = (c) => {
        setaddNew(false);
        setShow(!show);
        setName(c.name);
        setAge(c.age);
    };

    const toggle2 = (c) => {
        setaddNew(true);
        setShow(!show);
    };

    const hideModal = () => {
        setShow(false);
        setName("");
        setAge("");
    };

    const deleteContact = (e) => {
        console.log(e.target.id);
        const filtered = contacts.filter(
            (contact) => contact.uuid != e.target.id
        );
        setContacts([...filtered]);
    };

    const addContact = (e) => {
        const newContact = {
            uuid: contacts.length,
            name: e.name,
            age: e.age,
            image: e.image,
        };
        setContacts([...contacts, newContact]);
        hideModal();
    };

    return (
        <div>
            <h1 className="title"> {contacts.length} People List 4</h1>
            <div className="card-body">
                <button className="card-button" onClick={toggle2}>
                    Add new person
                </button>
                {contacts.map((c, index) => (
                    <div
                        style={{
                            textAlign: "left",
                            marginLeft: "10%",
                            marginTop: "5%",
                        }}
                        key={index}
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
                        <Modal
                            addContact={addContact}
                            addNew={addNew}
                            show={show}
                            handleClose={hideModal}
                        >
                            <p>{name}</p>
                            <p>{age}</p>
                        </Modal>
                        <img
                            style={{
                                borderRadius: "50%",
                                width: "70px",
                                height: "70px",
                                boxShadow: "0px 0px 10px #000",
                            }}
                            src={c.image}
                            onClick={() => {
                                toggle(c);
                            }}
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
