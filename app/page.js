const names = ["Gabriel", "Ana Luiza", "Maria Firmina", "Luiza Maria", "Pitico"];

export default function Home() {
  return (
    <main>
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
