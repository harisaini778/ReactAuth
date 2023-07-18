import Home from './components/Home';
import LogIn from './components/LogIn';
import './App.css';
import {BrowserRouter as Router, Route,Routes,Navigate} from "react-router-dom"

function App() {
  return (
    
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Navigate to="/Home" />} />
          <Route path='/Home' element={<Home/> } />
          <Route path='/LogIn' element={<LogIn />} />
          {/* <Route path='/Profile' element={<Profiles />} />
          <Route path='/LogOut' element={<LogOut/>}/> */}
        </Routes>
      </Router>
    </div>
    
  );
}

export default App;
