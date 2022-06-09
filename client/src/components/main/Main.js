import React from "react";

import Header from "../header/Header";
import Timeline from "../timeline/Timline";
import Footer from "../footer/Footer";

import "./main.css";

const Main = () => {
    return (
        <div className="layout">
            <Header />
            <Timeline />
            <Footer />
        </div>
    );
};

export default Main;
