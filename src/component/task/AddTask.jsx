import React, { useState } from 'react'

const AddTask = () => {
  const[task, setTasks] = useState({
    name : '',
    title : '',
    description : '',
    duration : ''
  })

  const {name, title, description, duration} = task

  const handleInputChange = (e) => {
    setTasks({...task, [e.target.name] : e.target.value})
  }

  return (
    <div className='col-sm-8 py-2 px-5'>
      <form>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='name'>Name</label>
          <input 
          className='form-control col-sm-6' 
          type="text" 
          name='name' 
          id='name' 
          required 
          value={name}
          onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='title'>Title</label>
          <input 
          className='form-control col-sm-6' 
          type="text" 
          name='title' 
          id='title' 
          required 
          value={title}
          onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='description'>Description</label>
          <input 
          className='form-control col-sm-6' 
          type="text" 
          name='description' 
          id='description' 
          required 
          value={description}
          onChange={(e) => handleInputChange(e)}/>
        </div>
        <div className='input-group mb-5'>
          <label className='input-group-text' htmlFor='duration'>Duration</label>
          <input 
          className='form-control col-sm-6' 
          type="text" 
          name='duration' 
          id='duration' 
          required 
          value={duration}
          onChange={(e) => handleInputChange(e)}/>
        </div>
      </form>
    </div>
  )
}

export default AddTask
