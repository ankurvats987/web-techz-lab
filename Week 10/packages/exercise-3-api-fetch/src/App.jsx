import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=8",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from API.");
        }

        const data = await response.json();
        setPosts(data);
      } catch (fetchError) {
        setError(fetchError.message || "Something went wrong.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main className="page">
      <section className="card">
        <h1>API Data Viewer</h1>

        {isLoading && <p className="status">Loading data...</p>}
        {error && <p className="error">{error}</p>}

        {!isLoading && !error && (
          <ul className="post-list">
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
