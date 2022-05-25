import { useState, useEffect } from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const Notes = ({ query, isDelete, setIsDelete }) => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("RNA-list"))
  );
  const [queryList, setQueryList] = useState([]);
  const [noteId, setNoteId] = useState("");

  const deleteNote = (id) => {
    setList((prevState) => {
      return prevState.filter((note) => note.id !== id);
    });
  };

  const addNote = (text) => {
    const newNote = {
      id: new Date().getTime(),
      date: new Date().toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
      text,
    };

    setList([...list, newNote]);
  };

  useEffect(() => {
    if (query) {
      let newQueryList = list.filter((note) =>
        note.text.toLowerCase().includes(query.toLowerCase())
      );
      setQueryList(newQueryList);
    }
  }, [query]);

  useEffect(() => {
    if (list) {
      localStorage.setItem("RNA-list", JSON.stringify(list));
    } else {
      setList([]);
    }
  }, [list]);

  useEffect(() => {
    if (isDelete) {
      console.log(`confirm delete note ${noteId}`);
      deleteNote(noteId);

      // -- Reset after delete
      setIsDelete(false);
      setNoteId("");
    }
  }, [isDelete]);

  if (query) {
    return (
      <section className="row notes-row pb-4">
        {queryList.length > 0 &&
          queryList.map((listItem) => {
            return (
              <Note key={listItem.id} {...listItem} handleDelete={setNoteId} />
            );
          })}

        {queryList.length === 0 && <p>0 search results.</p>}
      </section>
    );
  }

  return (
    <section className="row notes-row pb-4">
      {list &&
        list.map((listItem) => {
          return <Note key={listItem.id} {...listItem} setNoteId={setNoteId} />;
        })}
      <AddNote handleAdd={addNote} />
    </section>
  );
};

export default Notes;
