import React, { useState } from 'react';
import '../../assets/index.css';
import {
  Button,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LogoImg from '../../assets/images/Logo.svg';
import axios from 'axios';

const SignUp = () => {
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('subscriber');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phoneNumber, password, role);

    axios
      .post(`${apiUrl}/auth/register`, {
        phone_number: phoneNumber,
        password: password,
        role: role,
        // email :"sample@gmail.com"
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate('/home');
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
          <img style={{ paddingBottom: '1.5rem' }} src={LogoImg} alt="DICHIT" />
          <p className="text-4xl font-bold">{`Create An Account!`}</p>
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
                <FormGroup>
                  <FormLabel id="demo-row-radio-buttons-group-label" required>
                    Role
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <div style={{ dispaly: 'flex', flexDirection: 'row' }}>
                      <FormControlLabel
                        value="subscriber"
                        control={<Radio />}
                        label="Subscriber"
                      />
                      <FormControlLabel
                        value="foreman"
                        control={<Radio />}
                        label="Foreman"
                      />
                      {/* <FormControlLabel
                    value="admin"
                    control={<Radio />}
                    label="Admin"
                  /> */}
                    </div>
                  </RadioGroup>
                </FormGroup>
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
                      textTransform: 'none',
                    }}
                    type="submit"
                  >
                    Sign Up
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
