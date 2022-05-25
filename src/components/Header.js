import { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState("");

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.body.classList.remove("dark-mode");
    } else {
      document.body.classList.add("dark-mode");
    }

    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="mt-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center">
        <h1>Notes</h1>
        <button className="btn btn-light" onClick={toggleDarkMode}>
          Toggle Mode
        </button>
      </div>
    </header>
  );
};

export default Header;
