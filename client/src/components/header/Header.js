import React from "react";
import FeatherIcon from "feather-icons-react";

import Typo from "../typography/Typo";

import "./header.css";

const Header = () => {
    return (
        <div className="header">
            <Typo text={"Live Spaces"} type="title" bold />
            <div className="sub-header">
                <div>
                    <FeatherIcon icon="check-circle" />
                </div>
                <Typo
                    text={
                        "All NFTs on Cyber either belong o or were minted by their space creator."
                    }
                />
            </div>
            <div className="separator" />
        </div>
    );
};

export default Header;
