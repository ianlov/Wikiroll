import "../assets/css/editmodal.css";

import { useHistory } from "react-router-dom";
import { createPortal } from "react-dom";
import { useState, useEffect } from "react";
import { updatePosition } from "../services/positions.js";
import { updateSubmission, destroySubmission } from "../services/submissions.js";
import { updateTransition, destroyTransition } from "../services/transitions.js";

const EditModal = (props) => {

  const history = useHistory();
  const [edit, setEdit] = useState({});

  useEffect(() => {
    setEdit({...props.editFocus});
  }, [props.editFocus]);

  const handleChange = (ev) => {
    const {name, value} = ev.target;
    setEdit({
      ...edit,
      [name]: value
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (edit.what_type==="transition") {
      await updateTransition(edit.id, edit.start_id, edit)
    } else if (edit.what_type==="submission") {
      await updateSubmission(edit.id, edit.position_id, edit)
    } else if (edit.what_type==="position") {
      await updatePosition(edit.id, edit)
    }
    history.push("/")
  }

  const handleDelete = async () => {
    if (edit.what_type==="transition") {
      await destroyTransition(edit.id, edit.start_id)
    } else {
      await destroySubmission(edit.id, edit.position_id)
    }
    history.push("/")
  }

  return props.isVisible ? createPortal(
    <div className="screen" >
      <div className="screen__modal-wrapper" >
        <p onClick={() => props.setIsVisible(!props.isVisible)} >Close X</p>
        <div className="screen__modal-wrapper__form-container" >
          <form onSubmit={handleSubmit} >
            <label htmlFor="name" >Name</label>
            <input 
              type="text"
              name="name"
              id="name"
              value={edit.name}
              onChange={handleChange}
            />
            <label htmlFor="description" >Description</label>
            <textarea 
              name="description"
              id="description"
              value={edit.description}
              onChange={handleChange}
            />
            <label htmlFor="img_url" >Image URL</label>
            <input 
              type="text"
              name="img_url"
              id="img_url"
              value={edit.img_url}
              onChange={handleChange}
            />
            <button className="submit-button" >Submit</button>
          </form>
        </div>
        {props.editFocus.what_type !== "position" ? 
        <p 
          onClick={handleDelete} 
          className="delete-button"
        >Delete {props.editFocus.what_type}</p> : null}
      </div>
    </div>,
    document.body
  ) : null
}

export default EditModal;