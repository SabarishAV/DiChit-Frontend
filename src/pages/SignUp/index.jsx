import React, { useState } from 'react';
import '../../assets/index.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/Logo.svg';

const SignUp = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');
    console.log(phoneNumber, password, { e });
  };

  return (
    <div
      className="w-full h-screen flex items-center justify-center p-5 m-0 overflow-x-hidden"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div className=" p-10 flex items-center justify-center m-0 overflow-x-hidden ">
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img style={{ paddingBottom: '2rem' }} src={LogoImg} alt="DICHIT" />
          <p className="text-4xl font-bold">{`Create New Account!`}</p>
          <p className="pt-2">
            Already have an account?{' '}
            <span>
              <a href="/signin" className="underline text-blue-300 font-bold">
                Sign In
              </a>
            </span>
          </p>

          <React.Fragment>
            <form onSubmit={handleSubmit}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  paddingTop: '2rem',
                  width: '14rem',
                }}
              >
                <div>
                  <TextField
                    label="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="string"
                    sx={{ mb: 1 }}
                  />
                </div>
                <div>
                  <TextField
                    label="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    variant="outlined"
                    color="secondary"
                    type="password"
                    sx={{ mb: 1 }}
                  />
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '4rem',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '1rem',
                  }}
                >
                  <Button
                    style={{
                      background: 'blue',
                      color: 'white',
                      borderRadius: '5rem',
                      width: '70%',
                    }}
                    type="submit"
                  >
                    Sign In
                  </Button>
                </div>
              </div>
            </form>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
