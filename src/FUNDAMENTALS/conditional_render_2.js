import * as React from "react";
import { useState, useEffect } from "react";
import "./styles.css";

const links = [
    {
        id: 1,
        linkText: "Home",
        linkUrl: "/",
    },
    {
        id: 2,
        linkText: "About",
        linkUrl: "/about",
    },
    {
        id: 3,
        linkText: "Contact",
        linkUrl: "/contact",
    },
    {
        id: 4,
        linkText: "Info",
        linkUrl: "/info",
    },
    {
        id: 5,
        linkText: "More",
        linkUrl: "/more",
    },
];

export default function ConditionRender2() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [currentLink, setCurrentLink] = useState(links[0]);

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", changeWidth);
    }, []);

    const changeLink = (linkId) => {
        setCurrentLink(links[linkId - 1]);
    };

    const HandleNavigation = () => {
        setToggleMenu(!toggleMenu);
    };

    return (
        <div>
            <div className="card-body">
                <h1 className="title">Navigation</h1>
                {links.map((link) => console.log(link.linkText))}
                <div>
                    <nav>
                        {screenWidth < 800 ? (
                            <button
                                onClick={() => {
                                    setToggleMenu(!toggleMenu);
                                }}
                                className="card-button"
                            >
                                Hamburger
                            </button>
                        ) : null}

                        {toggleMenu || screenWidth >= 800 ? (
                            <ul
                                style={{
                                    display:
                                        toggleMenu && screenWidth < 800
                                            ? "block"
                                            : "flex",
                                }}
                                className="list"
                            >
                                {links.map((link) => (
                                    <li
                                        onClick={(e) => changeLink(link.id)}
                                        className="items"
                                        key={link.id}
                                    >
                                        <div>{link.linkText}</div>
                                        <div>{link.url}</div>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </nav>
                </div>

                <div
                    style={{
                        marginTop: "50%",
                    }}
                    className="title"
                >
                    {currentLink.linkText}
                </div>
            </div>
        </div>
    );
}
