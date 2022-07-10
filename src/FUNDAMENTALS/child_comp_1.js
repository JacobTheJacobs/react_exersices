import React, { Component } from "react";
import "./styles.css";

var stylingObject = {
    header: {
        color: "blue",
        textAlign: "center",
        border: "1px solid black",
    },
    img: {
        width: "55px",
        height: "55px",
    },
    author: {
        color: "lightblue",
    },
    description: {
        color: "black",
        fontSize: "2rem",
    },
    footer: {
        color: "blue",
        fontSize: "0.9rem",
    },
};

export default class ChildComp1 extends Component {
    render() {
        return (
            <div style={stylingObject.header}>
                <h5>Book componennt by function</h5>
                <img
                    style={stylingObject.img}
                    src="https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
                />
                <p style={stylingObject.author}>by author</p>
                <p style={stylingObject.description}>Book description</p>
                <p style={stylingObject.footer}>Book componennt by function</p>
            </div>
        );
    }
}
