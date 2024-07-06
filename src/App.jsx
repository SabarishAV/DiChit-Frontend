import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserHome from './pages/UserHome';
import UserForm from './components/UserForm';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />

      <Route path="/signup" element={<SignUp />} />

      <Route path="/home" element={<UserHome />} />
      <Route path="/home1" element={<UserForm />} />

    </Routes>
  );
}

export default App;
