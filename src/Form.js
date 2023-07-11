import { useState } from "react";
export default function Form({ onAddItem }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemName) return;

    const newItem = {
      description: itemName,
      id: Date.now(),
      packed: false,
      quantity,
    };

    onAddItem(newItem);

    setItemName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(q) => setQuantity(Number(q.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}
