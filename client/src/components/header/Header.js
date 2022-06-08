import React from "react";
import Typo from "../typography/Typo";

import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <Typo text={"Live Spaces"} type="title" />
        </div>
    );
};

export default Header;
