function ItemList({ items, onRemove }) {
  if (items.length === 0) {
    return <p className="empty">No items available. Add one above.</p>;
  }

  return (
    <ul className="item-list">
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button type="button" onClick={() => onRemove(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
