import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Update from './components/Update';
import DeleteUser from "./components/DeleteUser";
import AddUser from "./components/Adduser";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<DeleteUser />} />
        <Route path="/adduser"  element={<AddUser />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
