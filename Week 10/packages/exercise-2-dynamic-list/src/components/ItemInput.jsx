function ItemInput({ value, onChange, onAdd }) {
  return (
    <div className="input-row">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter item name"
      />
      <button type="button" onClick={onAdd}>
        Add Item
      </button>
    </div>
  );
}

export default ItemInput;
