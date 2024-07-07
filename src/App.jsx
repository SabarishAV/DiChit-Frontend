import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import UserHome from './pages/UserHome';
// import ChitDetail from './components/ChitDetail';
// import ChitBox from './components/ChitBox';

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />


      <Route path="/signup" element={<SignUp />} />

      <Route path="/home" element={<UserHome />} />
      {/* <Route path="/home1" element={<ChitBox />} /> */}
    </Routes>
  );
}

export default App;
