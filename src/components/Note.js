import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, title, text, date, handleDeleteNote }) => {
  return (
    <div className="note">
      <span className="textSpan">{title}</span>
      <span className="textSpan">{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
