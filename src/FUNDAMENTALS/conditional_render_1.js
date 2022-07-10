import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

//conditional rendirenig
//lifecycle
//forms
export default function ConditionRender1() {
    const [homePage, setHomePage] = useState(true);
    const [aboutPage, setAboutPage] = useState(false);

    const Home = (e) => {
        setHomePage(true);
        setAboutPage(false);
    };

    const About = (e) => {
        setHomePage(false);
        setAboutPage(true);
    };

    return (
        <div
            style={{
                display: "block",
                margin: "auto",
                width: "30%",
            }}
        >
            <button
                style={{ margin: "5px" }}
                onClick={(e) => {
                    Home(e);
                }}
            >
                Home
            </button>
            <button
                onClick={(e) => {
                    About(e);
                }}
            >
                About
            </button>

            <div>
                {homePage ? <div>Home </div> : null}
                {aboutPage ? <div>About </div> : null}
            </div>
        </div>
    );
}
