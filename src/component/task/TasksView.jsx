import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { IoTrashOutline, IoPencil, IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";


const TasksView = () => {
  const[tasks, setTasks] = useState([])
  useEffect(() => {
    loadTasks()
  }, [])
  const loadTasks = async()=>{
    const result = await axios.get("http://localhost:8080/tasks", {
      validateStatus: () => {
        return true
      }
    })
    if(result.status === 302) {
      setTasks(result.data)
    }
  }
  return (
    <section>
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>ID</th>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Duration</th>
                <th colSpan='3'>Actions</th>
            </tr>
        </thead>
        <tbody className='text-center'>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
            <td>{task.name}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.duration}</td>
            <td className='mx-2'>
            <Link to={`/task-profile/${task.id}`} className='btn btn-info'>
              <IoEye />
              </Link>
            </td>
            <td className='mx-2'>
            <Link to={`/edit-task/${task.id}`} className='btn btn-warning'>
              <IoPencil />
              </Link>
            </td>
            <td className='mx-2'>
            <button className='btn btn-danger'>
              <IoTrashOutline />
              </button>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TasksView
