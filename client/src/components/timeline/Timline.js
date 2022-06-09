import React, { useEffect, useState } from "react";

import Filter from "../filter/Filter";
import Post from "../post/Post";

import "./timeline.css";

const data = [
    {
        id: "image_1",
        url: "https://images.unsplash.com/photo-1654639081377-1a10d53c0052?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        caption: "Skate is the new sport",
        tags: ["Sports"],
    },
    {
        id: "image_2",
        url: "https://images.unsplash.com/photo-1628199856702-e33fc268e783?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        caption: "Strength of supply chain",
        tags: ["Genesis"],
    },
    {
        id: "image_3",
        url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        caption: "Micro Frontends, Micro Services, Micro Application",
        tags: ["24h Trending", "latest shows"],
    },
    {
        id: "image_4",
        url: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        caption: "Code Brust !",
        tags: ["latest shows"],
    },
    {
        id: "image_5",
        url: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
        caption: "Trading Trending!",
        tags: ["24h Trending", "Genesis"],
    },
];

const Timeline = () => {
    const [posts, setPosts] = useState([]);
    const [postsOrig, setPostsOrig] = useState([]);

    const [filter, setFilter] = useState("");

    useEffect(() => {
        if (!postsOrig.length) {
            setPostsOrig(data);
        }
    }, []);

    useEffect(() => {
        if (filter) {
            setPosts(postsOrig.filter((post) => post.tags.includes(filter)));
        } else if (postsOrig.length) {
            setPosts(postsOrig);
        }
    }, [filter, postsOrig]);

    return (
        <div className="timeline-container">
            <Filter filter={filter} setFilter={setFilter} />
            <div className="timeline">
                {posts.map(({ id, url, caption }) => (
                    <Post key={id} url={url} caption={caption} />
                ))}
            </div>
        </div>
    );
};

export default Timeline;
