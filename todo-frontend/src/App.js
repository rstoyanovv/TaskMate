import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import CreateNewTask from './components/CreateNewTask';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import Archive from './components/Archive';
//import Footer from './components/Footer';

//Add a path for 'not found 404'
function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={< WelcomePage />} />
          <Route path="api/get-tasks" element={< TodoList />} />
          <Route path="api/create-task" element={< CreateNewTask />} />
          <Route path="api/archived-tasks" element={< Archive />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
