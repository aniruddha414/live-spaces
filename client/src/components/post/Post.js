import React from "react";
import Typo from "../typography/Typo";

import "./post.css";

const Post = ({ url, caption }) => {
    return (
        <div className="post card">
            <img className="image" src={url} alt="Post" />
            <div className="caption-container">
                <div className="caption">
                    <Typo text={caption} />
                </div>
            </div>
        </div>
    );
};

export default Post;
