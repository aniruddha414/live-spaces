import React from "react";

import "./typo.css";

const CLASS_MAPPING = {
    bodyMedium: "body-medium",
    bodySmall: "body-small",
    title: "title",
    subTitle: "sub-title",
};

const Typo = ({ type, text, bold, italic }) => {
    return (
        <div
            className={`${CLASS_MAPPING[type]} ${bold ? "bold" : ""} ${
                italic ? "italic" : ""
            }`}
        >
            {text}
        </div>
    );
};

export default Typo;
