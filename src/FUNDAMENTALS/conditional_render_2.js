import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

//conditional rendirenig
//lifecycle
//forms
export default function ConditionRender2() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [homePage, setHomePage] = useState(true);
    const [aboutPage, setAboutPage] = useState(false);
    const [contactPage, setContactPage] = useState(false);

    const Home = (e) => {
        setHomePage(true);
        setAboutPage(false);
        setContactPage(false);
    };

    const About = (e) => {
        setHomePage(false);
        setAboutPage(true);
        setContactPage(false);
    };

    const Contact = (e) => {
        setHomePage(false);
        setAboutPage(false);
        setContactPage(true);
    };
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);
    }, []);
    return (
        <div>
            <nav>
                {(toggleMenu || screenWidth > 500) && (
                    <ul className="list">
                        <li
                            className="items"
                            onClick={(e) => {
                                Home(e);
                            }}
                        >
                            Home
                        </li>
                        <li
                            className="items"
                            onClick={(e) => {
                                About(e);
                            }}
                        >
                            About
                        </li>
                        <li
                            className="items"
                            onClick={(e) => {
                                Contact(e);
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                )}
                <button
                    onClick={() => {
                        setToggleMenu(!toggleMenu);
                    }}
                    className="btn"
                >
                    BTN
                </button>
            </nav>
            <div
                style={{
                    marginTop: "80%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {homePage ? <div>Home </div> : null}
                {aboutPage ? <div>About </div> : null}
                {contactPage ? <div>Contact </div> : null}
            </div>
        </div>
    );
}
