import { useState } from "react";
import "./App.css";

function App() {
  // States
  const [title, setTitle] = useState("");

  // Handlers
  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    await fetch("http://localhost:5000/decks", {
      method: "POST",
      body: JSON.stringify({ title }),
      headers: { "Content-Type": "application/json" },
    });
    setTitle("");
  }

  return (
    <>
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          type="text"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
        <button>Create Deck</button>
      </form>
    </>
  );
}

export default App;
