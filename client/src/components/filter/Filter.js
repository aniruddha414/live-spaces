import React, { useCallback, useState } from "react";
import Button from "./button/Button";

import "./filter.css";

const filters = [
    { id: 1, text: "24h Trending", emoji: "&#128293;" },
    { id: 2, text: "latest shows", emoji: null },
    { id: 3, text: "Genesis", emoji: "&#x1F48E;" },
];

const Filter = () => {
    const [filter, setFilter] = useState("");

    const onSetFilter = useCallback((text) => {
        setFilter(text);
    }, []);

    return (
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
    );
};

export default Filter;
