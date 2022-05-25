import { useState } from "react";

const CHAR_LIMIT = 200;
const AddNote = ({ handleAdd }) => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    let newText = e.target.value;
    if (newText.length <= CHAR_LIMIT) {
      setText(newText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text) {
      handleAdd(text);

      // -- Reset new note
      setText("");
    } else {
      alert("Please enter a note.");
    }
  };

  return (
    <article className="col-12 col-sm-6 col-md-4">
      <form className="single-note add" onSubmit={handleSubmit}>
        <textarea
          className="note-text mb-2 form-textarea w-100 border-0"
          placeholder="Type to add a new note..."
          value={text}
          onInput={handleInput}
        />
        <div className="d-flex justify-content-between align-items-end">
          <small>{CHAR_LIMIT - text.length} Remaining</small>
          <button className="btn btn-light" type="submit">
            Save
          </button>
        </div>
      </form>
    </article>
  );
};

export default AddNote;
