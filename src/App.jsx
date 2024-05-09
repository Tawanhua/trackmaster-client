import { useState } from 'react'
import './App.css';
import Home from './Home';
import TasksView from './component/task/TasksView';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
        <h2>Welcome</h2>
        <Home/>
        <TasksView/>
      </div>
    
  )
}

export default App
