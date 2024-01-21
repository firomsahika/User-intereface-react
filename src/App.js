import Login from "./pages/Login";
import Register from "./pages/Register";
import './index.css';
import Home from "./pages/Home";
import { Route,Routes } from "react-router-dom";
import Forgotpassword from "./pages/Forgotpassword";




function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
      </Routes>
    
    </div>
  )
  
}

export default App;
