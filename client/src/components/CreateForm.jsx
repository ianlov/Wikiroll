import { useState } from "react";

const CreateForm = () => {
  const [type, setType] = useState("position")

  const handleType = (what_type) => {
    if (type==="transition") {
      return (
        <>
          transition
        </>
      )
    } else if (type==="submission") {
      return (
        <> 
          submission
        </>
      )
    } else {
      return null
    }
  }

  return (
    <form>
      <input 
        type="radio" 
        name="what_type" 
        id="position" 
        value="position" 
        onClick={(ev)=>setType(ev.target.value)} 
      />
      <label htmlFor="position" >Position</label>
      <input 
        type="radio" 
        name="what_type" 
        id="transition" 
        value="transition" 
        onClick={(ev)=>setType(ev.target.value)} 
      />
      <label htmlFor="transition" >Transition</label>
      <input 
        type="radio" 
        name="what_type" 
        id="submission" 
        value="submission" 
        onClick={(ev)=>setType(ev.target.value)} 
      />
      <label htmlFor="submission" >Submission</label>
      {handleType(type)}
      <label>Name</label><input />
      <label>Description</label><input />
      <label>Image Url</label><input />
    </form>
  )
}

export default CreateForm;