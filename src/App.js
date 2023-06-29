import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import AuthProvider from './AuthProvider';
//  import PrivateRoute from './PrivateRoute';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Admin from './components/Admin';
import './App.css'
const App = () => {
  return (
    <AuthProvider>
       {/* <Admin/>
        <Login/> 
       <Signup/>    */}
     {/* <Home/>  */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Signup/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;


