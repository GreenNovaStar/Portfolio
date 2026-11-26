export function Chips({ items }: { items: readonly string[] }) {
  return (
    <ul className="chips" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
