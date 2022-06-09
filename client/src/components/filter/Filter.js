import React, { useCallback } from "react";

import Button from "./button/Button";
import Typo from "../typography/Typo";

import "./filter.css";

const filters = [
    { id: 1, text: "24h Trending", emoji: "&#128293;" },
    { id: 2, text: "latest shows", emoji: null },
    { id: 3, text: "Genesis", emoji: "&#x1F48E;" },
    { id: 4, text: "Sports", emoji: null },
];

const Filter = ({ filter, setFilter }) => {
    const onSetFilter = useCallback((text) => {
        setFilter(text);
    }, []);

    return (
        <div>
            <div className="filter-container">
                {filters.map(({ id, text, emoji }) => (
                    <Button
                        key={id}
                        text={text}
                        onClick={onSetFilter}
                        selected={filter === text}
                    />
                ))}
            </div>
            <div className="clear-action-container">
                <div className="clear-action" onClick={() => onSetFilter("")}>
                    <Typo text={"Clear Filter"} type="bodySmall" />
                </div>
            </div>
        </div>
    );
};

export default Filter;
