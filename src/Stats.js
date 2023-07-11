export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding some items to your packing list 🚀</em>
        </p>
      );
  
    const numberOfItems = items.length;
    const numberOfPackedItems = items.filter((item) => item.packed).length;
    const percentOfPackedItems =
      Math.round((numberOfPackedItems * 100) / numberOfItems) || 0;
    return (
      <footer className="stats">
        <em>
          {percentOfPackedItems === 100
            ? "You got everything! Ready to go"
            : `💼 You have ${numberOfItems} items on
          your list, and you already packed ${numberOfPackedItems} (
          ${percentOfPackedItems}%)`}
        </em>
      </footer>
    );
  }