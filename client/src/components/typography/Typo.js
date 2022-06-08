import React from "react";

import "./typo.css";

const CLASS_MAPPING = {
    bodyMedium: "body-medium",
    bodySmall: "body-small",
    title: "title",
    subTitle: "sub-title",
};

const Typo = ({ type, text }) => {
    return <div className={`${CLASS_MAPPING[type]}`}>{text}</div>;
};

export default Typo;
