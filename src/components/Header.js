import React from "react";

const Header = ({ handleToggleDarkMode, currentNotes }) => {
  return (
    <div className="header">
      <h1>NOTES</h1>
      <div className="button-div">
        <button
          onClick={() => {
            var element = document.createElement("a");
            var notesString = "Your Notes For Today\n\n";
            if (currentNotes.length === 0) {
              alert("No notes to Download.....");
            } else {
              for (var i in currentNotes) {
                notesString += currentNotes[i].title + "\n\n";
                notesString += currentNotes[i].text + "\n\n\n";
              }
              notesString += "Greetings from Aman.... :)";
              element.setAttribute(
                "href",
                "data:text/plain;charset=utf-8," +
                  encodeURIComponent(notesString)
              );
              element.setAttribute("download", "Your_Notes.txt");

              element.style.display = "none";
              document.body.appendChild(element);

              element.click();

              document.body.removeChild(element);
            }
          }}
          className="save"
        >
          Download All Notes
        </button>
        <button
          onClick={() => {
            handleToggleDarkMode((previousDarkMode) => !previousDarkMode);
          }}
          className="save"
        >
          Toggle Mode
        </button>
      </div>
    </div>
  );
};

export default Header;
