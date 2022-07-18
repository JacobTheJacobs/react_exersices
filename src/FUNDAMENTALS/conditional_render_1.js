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
        <div>
            <h1 className="title">Menu</h1>
        <div
            className="card-body"
        >
            <button
                className="card-button"
                onClick={(e) => {
                    Home(e);
                }}
            >
                Home
            </button>
            <button
             className="card-button"
                onClick={(e) => {
                    About(e);
                }}
            >
                About
            </button>

            <div className="card-text">
                {homePage ? <div className="title">Home </div> : null}
                {aboutPage ? <div className="title">About </div> : null}
                
            </div>
        </div>

        </div>
   
    );
}
