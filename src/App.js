// import React from 'react';
// import Home from './components/Home';
// import LogIn from './components/LogIn';
// import Profile from './components/Profile';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
// import AuthContext, { AuthContextProvider } from './components/store/auth-context';
// import { useContext } from 'react';

// function App() {
//   const AuthCtx = useContext(AuthContext);
  
//   return (
//     <AuthContextProvider>
//       <div>
//         <Router>
//           <Routes>
//             {/* Public routes */}
//             <Route path='/' element={<Home />} />
//             <Route path='Home' element={<Home />} />;
//             {!AuthCtx.isLoggedIn && <Route path='/LogIn' element={<LogIn />} />}

//             {/* Private route */}
//             {<Route path='/Profile' element={<Profile />} />}

//             {/* Redirect to "/Home" if an unknown route is accessed */}
//             <Route path='*' element={<Navigate to="/Home" />} />
//           </Routes>
//         </Router>
//       </div>
//     </AuthContextProvider>
//   );
// }
// export default App;

import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import LogIn from './components/LogIn';
import Profile from './components/Profile';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import AuthContext, { AuthContextProvider } from './components/store/auth-context';
import { useContext } from 'react';

function App() {
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());
  const AuthCtx = useContext(AuthContext);

  useEffect(() => {
    // Check for inactivity every minute
    const timer = setInterval(() => {
      const currentTime = Date.now();
      const timeSinceLastActivity = currentTime - lastActivityTime;
      const inactivityDuration = 5 * 60 * 1000; // 5 minutes in milliseconds

      // If more than 5 minutes of inactivity, logout the user
      if (timeSinceLastActivity > inactivityDuration) {
        // Clear the token and perform any other necessary logout actions
        AuthCtx.logout();
      }
    }, 60000); // Check every minute

    // Add event listeners to track user activity
    const handleUserActivity = () => {
      setLastActivityTime(Date.now());
    };

    document.addEventListener('click', handleUserActivity);
    document.addEventListener('keydown', handleUserActivity);
    // Add any other event listeners you want to track as user activity

    // Clean up the timer and event listeners when the component unmounts
    return () => {
      clearInterval(timer);
      document.removeEventListener('click', handleUserActivity);
      document.removeEventListener('keydown', handleUserActivity);
      // Remove any other event listeners here
    };
  }, [lastActivityTime, AuthCtx]);

  return (
    <AuthContextProvider>
      <div>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path='/' element={<Home />} />
            <Route path='/Home' element={<Home/>} />
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

