import '../assets/css/createform.css'

import { handleType } from "../utilities/handleType.js";

import { useState } from "react";

const CreateForm = (props) => {
  const [type, setType] = useState("position")
  const [created, setCreated] = useState({
    "name": "",
    "description": "",
    "img_url": "",
    "what_type": type
  })

  const handleChange = (ev) => {
    const { name, value }  = ev.target
    setCreated({
      ...created,
      [name]: value
    })
  }
  
  return (
    <form className="create-form" >
      <label htmlFor="what_type" >Type</label>
      <select 
        onChange={handleChange} 
        name="what_type"
        id="what_type"
      >
        <option value="position" >Position</option>
        <option value="transition" >Transition</option>
        <option value="submission" >Submission</option>
      </select>
      {handleType(type, props.positions)}
      <label htmlFor="name" >Name</label>
      <input 
        type="text"
        name="name" 
        id="name" 
        value={created.name}
        onChange={handleChange}
      />
      <label htmlFor="description" >Description</label>
      <textarea
        name="description" 
        id="description" 
        value={created.description}
        onChange={handleChange}
      />
      <label htmlFor="img_url" >Image Url</label>
      <input 
        type="text"
        name="img_url" 
        id="img_url" 
        value={created.img_url}
        onChange={handleChange}
      />
    </form>
  )
}

export default CreateForm;