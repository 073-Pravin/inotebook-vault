import React, { useState } from "react";
import noteContext from "./noteContext";
export default function NoteState(props) {
  const host = "http://localhost:5000";
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial);




  // Get all Notes
  const getNotes = async() => {
    // API Call
    const response = await fetch(
      `${host}/api/notes/fetchallnotes`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNjU0YmZkNWZhZTNiMzQwZWFhMzkwIn0sImlhdCI6MTY5MjgxNjU3NX0.N-nxwNQKLlurnn_iIMFc0T_m6R8zW95n2zfrb2UAr44",
        },
      }
    );
    const json = await response.json();
    setNotes(json);
  };

  // Add a Note
  const addNote = async(title, description, tag) => {
    // API Call
    const response = await fetch(
      `${host}/api/notes/addnote`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNjU0YmZkNWZhZTNiMzQwZWFhMzkwIn0sImlhdCI6MTY5MjgxNjU3NX0.N-nxwNQKLlurnn_iIMFc0T_m6R8zW95n2zfrb2UAr44",
        },

        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      }
    );

    const json = await response.json();
    console.log(json);
    getNotes();
  };

  // Delete a Note
  const deleteNote = async(id) => {
    // console.log("deleting a Note" + id);
    
    const response = await fetch(
      `${host}/api/notes/deletenote/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNjU0YmZkNWZhZTNiMzQwZWFhMzkwIn0sImlhdCI6MTY5MjgxNjU3NX0.N-nxwNQKLlurnn_iIMFc0T_m6R8zW95n2zfrb2UAr44",
        },
      }
    );
    const json = await response.json();
    console.log(json);
    getNotes();
    console.log("note has deleted")
  };

  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(
      `${host}/api/notes/updatenote/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlNjU0YmZkNWZhZTNiMzQwZWFhMzkwIn0sImlhdCI6MTY5MjgxNjU3NX0.N-nxwNQKLlurnn_iIMFc0T_m6R8zW95n2zfrb2UAr44",
        },

        body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
      }
    );
    const json = response.json();
    console.log(json);

    let newNotes=JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = newNotes[index];

      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <noteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote,getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
}
