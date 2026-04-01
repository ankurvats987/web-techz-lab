import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const decrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  return (
    <main className="page">
      <section className="counter-card">
        <h1>Simple Counter</h1>
        <p className="counter-value">{count}</p>
        <div className="actions">
          <button onClick={decrement} type="button">
            Decrement
          </button>
          <button onClick={increment} type="button">
            Increment
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
