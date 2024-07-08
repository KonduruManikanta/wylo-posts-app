// src/components/CreatePostScreen.js
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const CreatePostScreen = ({ posts, onUpdatePost, onCreatePost }) => {
  const { id } = useParams(); // Get id from URL params for editing
  const history = useHistory();
  const isEditMode = Boolean(id);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Initialize form fields if in edit mode
  useEffect(() => {
    if (isEditMode) {
      const postToEdit = posts.find((post) => post.id === parseInt(id));
      if (postToEdit) {
        setTitle(postToEdit.title);
        setContent(postToEdit.content);
      }
    }
  }, [id, isEditMode, posts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditMode) {
      onUpdatePost({ id: parseInt(id), title, content });
    } else {
      onCreatePost({ title, content });
    }

    history.push("/");
  };

  return (
    <div>
      <h1>{isEditMode ? "Edit Post" : "Create Post"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {isEditMode ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
};

export default CreatePostScreen;
