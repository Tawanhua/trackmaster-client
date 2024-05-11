import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { IoTrashSharp, IoPencil, IoInformationCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import Search from '../common/Search';


const TasksView = () => {
  const[tasks, setTasks] = useState([])
  const[search, setSearch] = useState('')
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

  const handleDelte = async(id) => {
    await axios.delete(`http://localhost:8080/tasks/delete/${id}`)
    loadTasks()
  }

  return (
    <section>
      <Search search={search} setSearch={setSearch}/>
      <table className='table table-bordered table-hover shadow'>
        <thead>
            <tr className='text-center'>
                <th>ID</th>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Duration</th>
                <th colSpan='2'>Actions</th>
                <th>Info</th>
            </tr>
        </thead>
        <tbody className='text-center'>
          {tasks.filter((st) => st.name
          .toLowerCase().includes(search))
          .map((task, index) => (
            <tr key={task.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
            <td>{task.name}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.duration}</td>
            <td className='mx-2'>
            <Link to={`/edit-task/${task.id}`} className='btn btn-outline-warning text-dark'>
              <IoPencil />
              </Link>
            </td>
            <td className='mx-2'>
            <button className='btn btn-outline-danger text-dark'
            onClick={() => handleDelte(task.id)}>
              <IoTrashSharp />
              </button>
            </td>
            <td className='mx-2'>
            <Link to={`/task-profile/${task.id}`} className='btn btn-outline-info text-dark'>
              <IoInformationCircle />
              </Link>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TasksView
