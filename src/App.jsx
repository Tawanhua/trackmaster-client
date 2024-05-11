import './App.css';
import Home from './Home';
import TasksView from './component/task/TasksView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './component/common/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {


  return (
    
      <main className='container mt-5'>
        <Router>
        <NavBar/>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/view-task' element={<TasksView/>}></Route>
          </Routes>
        </Router>

      </main>
    
  )
}

export default App
