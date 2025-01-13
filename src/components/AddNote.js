import React, { useState } from "react";
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

const AddNote = () => {
  const context = useContext(noteContext);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [message, setMessage] = useState(""); // For success or error message
  const { addNote } = context;

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await addNote(note.title, note.description, note.tag);
      setMessage("Note added successfully!");
      setNote({ title: "", description: "", tag: "" });
    } catch (error) {
      setMessage("Failed to add note. Please try again.");
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container my-4">
        <h2>Add a Note</h2>
        {message && <div className="alert alert-info">{message}</div>}
        <form>
          <div className="mb-3 my-4">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              onChange={onChange}
              minLength={5}
              required
              value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
              minLength={5}
              required
              value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              onChange={onChange}
              minLength={5}
              required
              value={note.tag}
            />
          </div>
          <button
            disabled={note.title.length < 5 || note.description.length < 5}
            type="submit"
            className="btn btn-primary my-3"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
