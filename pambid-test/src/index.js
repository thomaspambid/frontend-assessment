import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.scss';
import ExerciseOne from './ExerciseOne';
import ExerciseTwo from './ExerciseTwo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<ExerciseOne />} />
      <Route path='/exercise2' element={<ExerciseTwo />} />
    </Routes>
  </Router>
);
