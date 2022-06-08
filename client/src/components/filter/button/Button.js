import React from "react";

import "./button.css";

const Button = ({ text, selected, onClick }) => {
    return (
        <button
            className={`button ${selected ? "selected" : ""}`}
            onClick={() => onClick(text)}
        >
            {text}
        </button>
    );
};

export default Button;
