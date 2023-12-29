import { useEffect, useState } from "react";
import "./App.css";

type TDeck = {
  title: string;
  _id: string;
  _v: string;
};

function App() {
  // Hooks
  const [title, setTitle] = useState("");
  const [decks, setDecks] = useState<TDeck[]>([]);

  useEffect(() => {
    async function fetchDecks() {
      const response = await fetch("http://localhost:5000/decks");
      const newDecks = await response.json();
      setDecks(newDecks);
    }
    fetchDecks();
  }, []);

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
      <ul className="decks">
        {decks.map((deck) => (
          <li key={deck._id}>{deck.title}</li>
        ))}
      </ul>
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
