import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useParams } from "react-router-dom";

const EditTask = () => {
    let navigate = useNavigate()

    const{id} = useParams()

    const[task, setTasks] = useState({
      name : '',
      title : '',
      description : '',
      duration : ''
    })
  
    const {name, title, description, duration} = task

    useEffect(() => {
        loadTask()
      }, [])
    
      const loadTask = async()=>{
        const result = await axios.get(`http://localhost:8080/tasks/task/${id}`)
          setTasks(result.data)
      }
  
    const handleInputChange = (e) => {
      setTasks({...task, [e.target.name] : e.target.value})
    }
  
    const updateTask = async(e) => {
      e.preventDefault()
      await axios.put(`http://localhost:8080/tasks/update/${id}`, task)
      navigate('/view-task')
    }
  
    return (
      <div className='col-sm-8 py-2 px-5 offset-2 shadow'>
        <h2>Edit Student</h2>
        <form onSubmit={(e) => updateTask(e)}>
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
          <div className="row mb-5">
                      <div className="col-sm-2">
                          <button
                              type="submit"
                              className="btn btn-outline-success btn-lg">
                              Save
                          </button>
                      </div>
  
                      <div className="col-sm-2">
                          <Link
                              to={"/view-task"}
                              type="submit"
                              className="btn btn-outline-warning btn-lg">
                              Cancel
                          </Link>
                      </div>
                  </div>
        </form>
      </div>
    )
}

export default EditTask
