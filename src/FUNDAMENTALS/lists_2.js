import * as React from "react";
import "./styles.css";
import products from "./products-data";

export default function ProductList() {
    return (
        <div>
            {products.map((q, i) => {
                return (
                    <div key={q.id} style={{ border: "1px solid red" }}>
                        {" "}
                        <p style={{ color: "black" }}>{q.id}</p>
                        <p style={{ color: "hotpink" }}>{q.name}</p>
                        <p style={{ color: "hotpink" }}>{q.description}</p>
                        <p style={{ color: "hotpink" }}>{q.price}</p>
                    </div>
                );
            })}
            <h5>Products componennt by function</h5>
        </div>
    );
}
