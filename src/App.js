import React from 'react';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthContext, { AuthContextProvider } from './components/store/auth-context';
import { useContext } from 'react';

function App() {
  const AuthCtx = useContext(AuthContext);
  
  return (
    <AuthContextProvider>
      <div>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path='/' element={<Home />} />
            <Route path='Home' element={<Home />} />;
            {!AuthCtx.isLoggedIn && <Route path='/LogIn' element={<LogIn />} />}

            {/* Private route */}
            {<Route path='/Profile' element={<Profile />} />}

            {/* Redirect to "/Home" if an unknown route is accessed */}
            <Route path='*' element={<Navigate to="/Home" />} />
          </Routes>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
