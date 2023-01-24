// import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar';
import {Routes, Route, Navigate} from 'react-router-dom';
import { ListofStudents } from './ListofStudents';
import { studentList } from './Lists';
import { Home } from './Home';
import { EditList } from './EditList';
import { Utilities } from './Utilities';
import { ViewUser } from './ViewUser';
import { useState } from 'react';
import { PageNotFound } from './PageNotFound';
import { Dashboard } from './Components/Dashboard';
import Trial from './Trial';

function App() {
  const [final,setFinal] = useState(studentList);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<ListofStudents />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/edit" element={<EditList />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/view-user/:id" element={<ViewUser final={final} setFinal={setFinal}/>} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="/*" element={<Navigate replace to ="/404" />}/>
      </Routes>
    </div>
  );
}

export default App;
