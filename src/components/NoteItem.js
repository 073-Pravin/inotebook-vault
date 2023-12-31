import React, { useContext } from "react";
import noteContext from "../context.js/notes/noteContext";
export default function NoteItem(props) {

  const context=useContext(noteContext)
  const { note,updateNote } = props;
  const {deleteNote} =context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-trash-can-arrow-up mx-2" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully","success");}}></i>
            <i className="fa-solid fa-pencil mx-2 " onClick={()=>{updateNote(note)}}></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}
