import { Header, Search, Notes, Modal } from "./components";
import { useState } from "react";
function App() {
  const [query, setQuery] = useState("");
  const [isDelete, setIsDelete] = useState(false);

  return (
    <main className="container">
      <Header />
      <Search setQuery={setQuery} query={query} />
      <Notes query={query} isDelete={isDelete} setIsDelete={setIsDelete} />
      <Modal setIsDelete={setIsDelete} />
    </main>
  );
}

export default App;

// # Features
// Search
// View all
// Delete
// Add
// Save to localStorage
// -- Edit
// Toggle mode
// Confirmation to delete
