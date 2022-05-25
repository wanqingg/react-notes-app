import { FaTrashAlt } from "react-icons/fa";

const Note = ({ id, date, text, setNoteId }) => {
  return (
    <article className="col-12 col-sm-6 col-md-4">
      <div className="single-note">
        <div className="note-text mb-2">{text}</div>
        <div className="d-flex justify-content-between align-items-end">
          <small>{date}</small>
          <FaTrashAlt
            data-bs-toggle="modal"
            data-bs-target="#confirmModal"
            type="button"
            onClick={() => setNoteId(id)}
          />
          {/* <FaTrashAlt onClick={() => handleDelete(id)} type="button" /> */}
        </div>
      </div>
    </article>
  );
};

export default Note;
