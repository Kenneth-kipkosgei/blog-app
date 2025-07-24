import { useState } from "react";
import Navbar from "./components/Navbar";
import BlogForm from "./components/BlogForm";
import BlogList from "./components/BlogList";

function App() {
  const [posts, setPosts] = useState([]);

  function handleAddPost(post) {
    setPosts([post, ...posts]);
  }

  function handleDeletePost(id) {
    setPosts(posts.filter(post => post.id !== id));
  }

  return (
    <div>
      <Navbar />
      <BlogForm onAddPost={handleAddPost} />
      <BlogList posts={posts} onDeletePost={handleDeletePost} />
    </div>
  );
}

export default App;
