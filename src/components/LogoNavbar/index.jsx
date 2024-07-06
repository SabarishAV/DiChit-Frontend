import React from 'react';
import LogoPath from '../../assets/images/Logo.svg';

const LogoNavbar = () => {
  return (
    <>
      <nav className="w-screen ">
        <div
          className="w-1/4 h-16 bg-no-repeat ml-10 mt-3"
          style={{ backgroundImage: `url(${LogoPath})` }}
        ></div>
      </nav>
    </>
  );
};

export default LogoNavbar;
