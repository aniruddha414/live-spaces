import React from "react";

import Header from "../header/Header";
import Timeline from "../timeline/Timline";

import "./main.css";

const Main = () => {
    return (
        <div className="layout">
            <Header />
            <Timeline />
        </div>
    );
};

export default Main;
