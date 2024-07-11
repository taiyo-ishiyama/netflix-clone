// import React, { useEffect, useState } from 'react';
// import './App.css';
// import Home from './pages/Home/Home';
// import Login from './pages/Login/Login';
// import Player from './pages/Player/Player';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);
//   const [authChecked, setAuthChecked] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setAuthChecked(true);
//       if (user) {
//         console.log("Logged In");
//         toast.success("Logged In");
//       } else {
//         console.log("Logged Out");
//         toast.info("Logged Out");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     if (authChecked) {
//       if (user) {
//         navigate('/');
//       } else {
//         navigate('/login');
//       }
//     }
//   }, [user, authChecked, navigate]);

//   if (!authChecked) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="App">
//       <ToastContainer theme='dark' />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/player/:id" element={<Player />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <ToastContainer theme="dark" />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/player/:id"
            element={
              <ProtectedRoute>
                <Player />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
