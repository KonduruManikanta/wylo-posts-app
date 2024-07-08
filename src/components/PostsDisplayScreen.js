// src/components/PostsDisplayScreen.js
import React from "react";
import { Link } from "react-router-dom";
import PostItem from "./PostItem"; // Assuming PostItem component is defined

const PostsDisplayScreen = ({ posts }) => {
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
      <Link to="/create-post">
        <button>Create New Post</button>
      </Link>
    </div>
  );
};

export default PostsDisplayScreen;
