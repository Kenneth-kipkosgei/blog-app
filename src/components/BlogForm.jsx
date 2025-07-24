import { useState } from "react";

function BlogForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
    };
    onAddPost(newPost);
    setTitle("");
    setContent("");
  }

  return (
    <form onSubmit={handleSubmit} style={{ margin: "1rem" }}>
      <h2>Add a New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: "block", width: "100%", marginBottom: "1rem" }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        style={{ display: "block", width: "100%", height: "100px", marginBottom: "1rem" }}
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default BlogForm;
