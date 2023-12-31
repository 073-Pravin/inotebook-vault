import React, { useContext,useEffect,useRef,useState } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import noteContext from "../context.js/notes/noteContext";
import { useHistory } from "react-router-dom";
export default function Notes(props) {
  const context = useContext(noteContext);
  const { notes,getNotes, editNote } = context;
  let history = useHistory();
  useEffect(() => {
    if(localStorage.getItem("token")){
        getNotes();
    }
    else{  
      history.push("/login")
    }
  }, []);
  
  const ref = useRef(null);
  const [note,setNote]=useState({id:"", etitle:"",edescription:"",etag:"default"})

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle: currentNote.title, edescription: currentNote.description,etag:currentNote.tag});
  
  };

  const refClose=useRef(null);
  const handleClick =(e)=>{
    editNote(note.id,note.etitle,note.edescription,note.etag)
    refClose.current.click();
    props.showAlert("Updated Successfully","success");
  }

  const onChange =(e)=>{
      setNote({...note,[e.target.name]: e.target.value})
  }
  return (
    <>
      <AddNote showAlert={props.showAlert} />
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <form className="my-3">
                  <div className="mb-3">
                    <label htmlFor="etitle" className="form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      aria-describedby="emailHelp"
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="edescription"
                      name="edescription"
                      value={note.edescription}
                      onChange={onChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      onChange={onChange}
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} updateNote={updateNote} showAlert={props.showAlert} note={note} />
          );
        })}
      </div>
    </>
  );
}
