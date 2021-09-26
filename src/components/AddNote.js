import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const characterLimit = 200;
  const titleLimit = 20;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };
  const handleTitleChange = (event) => {
    if (titleLimit - event.target.value.length >= 0) {
      setNoteTitle(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteTitle, noteText);
      setNoteText("");
      setNoteTitle("");
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="1"
        cols="10"
        placeholder="Add Title....."
        value={noteTitle}
        onChange={handleTitleChange}
      ></textarea>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small style={{ color: "#1e272e", fontWeight: "bold" }}>Limit </small>
        <small style={{ color: "#1e272e", fontWeight: "bold" }}>
          Title: {titleLimit - noteTitle.length}
        </small>
        <small style={{ color: "#1e272e", fontWeight: "bold" }}>
          Text: {characterLimit - noteText.length}
        </small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
