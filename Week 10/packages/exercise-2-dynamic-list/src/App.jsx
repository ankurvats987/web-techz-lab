import { useState } from "react";
import ItemInput from "./components/ItemInput.jsx";
import ItemList from "./components/ItemList.jsx";

const initialItems = [
  { id: 1, title: "Complete lab record" },
  { id: 2, title: "Practice React hooks" },
];

function App() {
  const [items, setItems] = useState(initialItems);
  const [newItem, setNewItem] = useState("");
  const [nextId, setNextId] = useState(3);

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleAddItem = () => {
    const trimmed = newItem.trim();
    if (!trimmed) {
      return;
    }

    setItems((previous) => [...previous, { id: nextId, title: trimmed }]);
    setNextId((previous) => previous + 1);
    setNewItem("");
  };

  const handleRemoveItem = (idToRemove) => {
    setItems((previous) => previous.filter((item) => item.id !== idToRemove));
  };

  return (
    <main className="page">
      <section className="card">
        <h1>Dynamic Item List</h1>
        <ItemInput
          value={newItem}
          onChange={handleInputChange}
          onAdd={handleAddItem}
        />
        <ItemList items={items} onRemove={handleRemoveItem} />
      </section>
    </main>
  );
}

export default App;
