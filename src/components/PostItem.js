// src/components/PostItem.js
import React from "react";
import { Link } from "react-router-dom";

const PostItem = ({ post }) => {
  const { id, title, content } = post;

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <Link to={`/edit-post/${id}`}>
        <button>Edit</button>
      </Link>
    </div>
  );
};

export default PostItem;
