import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Title</th>
                <th>Description</th>
                <th>Duration</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <th scope='row' key={index}>
                {index + 1}
              </th>
            <td>{task.name}</td>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.duration}</td>
            <td>View</td>
            <td>Update</td>
            <td>Delete</td>
          </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TasksView
