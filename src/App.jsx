import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />

      <Route path="/signup" element={<SignUp />} />

      {/* <Route component={NotFound} /> */}
    </Routes>
  );
}

export default App;
