import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoList from './components/TodoList';
import CreateNewTask from './components/CreateNewTask';
import Navbar from './components/Navbar';
import WelcomePage from './components/WelcomePage';
import Archive from './components/Archive';
import NotFound from './components/NotFound';

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
          <Route path="*" element={< NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
