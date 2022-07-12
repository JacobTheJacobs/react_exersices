import * as React from "react";
import "./style.css";

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

var grids = {
    parentGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)",
        gridColumnGap: "0px",
        gridRowGap: "0px",
    },
    grid1: {
        gridArea: "1 / 1 / 3 / 3",
    },
    grid2: {
        gridArea: "1 / 3 / 3 / 5",
    },
    grid3: {
        gridArea: "3 / 1 / 5 / 3",
    },
    grid4: {
        gridArea: "3 / 3 / 5 / 5",
    },
};

export default function ChildComp2() {
    return (
        <div style={grids.parentGrid}>
            <div style={stylingObject.header && grids.grid1}>
                <h5>Book componennt by function</h5>
                <img
                    style={stylingObject.img}
                    src="https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
                />
                <p style={stylingObject.author}>by author</p>
                <p style={stylingObject.description}>Book description</p>
                <p style={stylingObject.footer}>Book componennt by function</p>
            </div>
            <div style={stylingObject.header && grids.grid2}>
                <h5>Book componennt by function</h5>
                <img
                    style={stylingObject.img}
                    src="https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
                />
                <p style={stylingObject.author}>by author</p>
                <p style={stylingObject.description}>Book description</p>
                <p style={stylingObject.footer}>Book componennt by function</p>
            </div>
            <div style={stylingObject.header && grids.grid3}>
                <h5>Book componennt by function</h5>
                <img
                    style={stylingObject.img}
                    src="https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
                />
                <p style={stylingObject.author}>by author</p>
                <p style={stylingObject.description}>Book description</p>
                <p style={stylingObject.footer}>Book componennt by function</p>
            </div>
            <div style={stylingObject.header && grids.grid4}>
                <h5>Book componennt by function</h5>
                <img
                    style={stylingObject.img}
                    src="https://www.collinsdictionary.com/images/full/book_181404689_1000.jpg"
                />
                <p style={stylingObject.author}>by author</p>
                <p style={stylingObject.description}>Book description</p>
                <p style={stylingObject.footer}>Book componennt by function</p>
            </div>
        </div>
    );
}
