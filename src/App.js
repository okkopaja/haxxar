import { Route, Routes } from "react-router-dom";
import './App.css';
import { Navbar } from './Component/Navbar';
import { Home } from './Component/pages/Home';
import { Dashboard } from './Component/pages/Dasbboard';
import { Course } from './Component/pages/Course';
import { Guidelines } from './Component/pages/Guidelines';
function App() {
  return (
   <div className="App" >
    <Navbar />
    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/Dashboard' element={<Dashboard /> }/>
      <Route path='/Courses' element={<Course /> }/>
      <Route path='/Guidelines' element={<Guidelines /> }/>
    </Routes>
   </div>
  );
}

export default App;