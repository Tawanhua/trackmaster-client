import './App.css';
import Home from './Home';
import TasksView from './component/task/TasksView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddTask from './component/task/AddTask';
import EditTask from './component/task/EditTask';
import TaskPofile from './component/task/TaskProfile';
import Search from './component/common/Search';


function App() {


  return (
    
      <main className='container mt-5'>
        <Router>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/view-task' element={<TasksView/>}></Route>
            <Route exact path='/add-task' element={<AddTask/>}></Route>
            <Route exact path='/edit-task/:id' element={<EditTask/>}></Route>
            <Route exact path='/task-profile/:id' element={<TaskPofile/>}></Route>
          </Routes>
        </Router>

      </main>
    
  )
}

export default App
