import Dashboard from "./components/Dashboard";
import Quiz from "./components/Quiz";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<><Navbar /><Dashboard /><Quiz/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
