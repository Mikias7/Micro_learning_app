import React, { useState, useEffect } from "react";
import "./Pdf_display.css";

function Pdf_display() {
    const [data, setData] = useState(null); // Initialize as null

    useEffect(() => {
        fetch("http://127.0.0.1:5000/text") // Use Flask server URL
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => setData(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return (
        <div className="pdf_display">
            <div className="pdf_display_text">
                {data?.text ? (
                    data.text.map((text, i) => <p key={i}>{text}</p>)
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Pdf_display;
