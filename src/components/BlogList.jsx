function BlogList({ posts, onDeletePost }) {
  return (
    <div style={{ margin: "1rem" }}>
      <h2>All Posts</h2>
      {posts.length === 0 && <p>No posts yet.</p>}
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <button onClick={() => onDeletePost(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
