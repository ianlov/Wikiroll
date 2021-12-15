import '../assets/css/createform.css'

import { createTransition } from "../services/transitions.js";
import { createSubmission } from "../services/submissions.js";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateForm = (props) => {
  const history = useHistory();
  const [type, setType] = useState("")
  const [item, setItem] = useState({})

  const handleChange = (ev) => {
    const { name, value } = ev.target
    setItem({
      ...item,
      [name]: value
    })
  }

  const handleChangeType = (ev) => {
    setType(ev.target.value)
    if (ev.target.value === "transition") {
      setItem({
        name: item.name,
        description: item.description,
        img_url: item.img_url,
        what_type: "transition",
        start_id: 1,
        finish_id: 1
      })
    } else if (ev.target.value === "submission") {
      setItem({
        name: item.name,
        description: item.description,
        img_url: item.img_url,
        what_type: "submission",
        position_id: 1
      })
    } else {
      setItem({
        name: item.name,
        description: item.description,
        img_url: item.img_url,
      })
    }
  }

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    if (type === 'transition') {
      const newTransition = {
        name: item.name,
        description: item.description,
        img_url: item.img_url,
        what_type: "transition",
        start_id: item.start_id,
        finish_id: item.finish_id
      }
      await createTransition(item.start_id, newTransition)
      history.push(`/position/${item.start_id}`)
    } else {
      const newSubmission = {
        name: item.name,
        description: item.description,
        img_url: item.img_url,
        what_type: "submission",
        position_id: item.position_id
      }
      await createSubmission(item.position_id, newSubmission)
      history.push(`/position/${item.position_id}`)
    }
  }


  return (
    <div className="create-form">
      <label htmlFor="what_type" >Transition/Submission</label>
      <select
        onChange={ev => handleChangeType(ev)}
        name="what_type"
        id="what_type"
      >
        <option value={null} >Select</option>
        <option value="transition" >Transition</option>
        <option value="submission" >Submission</option>
      </select>

      {item.what_type ?
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" >Name</label>
          <input
            name="name"
            id="name"
            value={item.name}
            onChange={handleChange}
          />
          <label htmlFor="description" >Description</label>
          <textarea
            name="description"
            id="description"
            value={item.description}
            onChange={handleChange}
          />
          <label htmlFor="img_url" >Image URL</label>
          <input
            name="img_url"
            id="img_url"
            value={item.img_url}
            onChange={handleChange}
          />
          {item.what_type === "transition" ?
            <>
              <label htmlFor="start_id" >Starting Position</label>
              <select
                name="start_id"
                id="start"
                onChange={(ev) => handleChange(ev)}
              >
                {props.positions.map(position => (
                  <option key={position.id} value={position.id} >{position.name}</option>
                ))}
              </select>

              <label htmlFor="finsih_id" >Finishing Position</label>
              <select
                name="finish_id"
                id="finish_id"
                onChange={(ev) => handleChange(ev)}
              >
                {props.positions.map(position => (
                  <option key={position.id} value={position.id} >{position.name}</option>
                ))}
              </select>
            </> :
            <>
              <label htmlFor="position_id" >Position</label>
              <select
                name="position_id"
                id="position_id"
                onChange={(ev) => handleChange(ev)}
              >
                {props.positions.map(position => (
                  <option key={position.id} value={position.id} >{position.name}</option>
                ))}
              </select>
            </>
          }
          <button className="submit-button" >Submit</button>
        </form> : null}
    </div>
  )
}

export default CreateForm;