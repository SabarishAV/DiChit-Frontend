import React from 'react';
import '../../assets/index.css';
import CustomButton from '../../components/Button';
import TextField from '../../components/InputField';

const SignUp = () => {
  return (
    <>
      <div className="w-screen flex items-center justify-center p-5">
        <div className="w-full min-h-screen flex items-start justify-center flex-col">
          <p className="text-4xl">Create a New Account</p>
          <p>
            Already have an account?{' '}
            <span>
              <a href="/signin" style={{ color: 'blue' }}>
                Sign In
              </a>
            </span>
          </p>
          <TextField name="Phone Number" />
          <TextField name="Password" />
          <CustomButton name="Sign Up" />
        </div>
      </div>
    </>
  );
};

export default SignUp;
