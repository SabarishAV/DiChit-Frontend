import LogoNavbar from '../LogoNavbar';
import { Button, TextField } from '@mui/material';

const UserForm = () => {
  return (
    <>
      <LogoNavbar className="flex flex-col" />
      <div className="flex-grow flex justify-center items-center flex-cols w-screen">
        <div className="w-3/6 flex justify-center items-center">
          {/* <form className="p-5 w-2/3 flex justify-center items-start h-full flex-col" action=""> */}
          <form
            className="w-full flex items-center justify-center flex-col"
            action=""
          >
            <TextField
              style={{ width: '100%' }}
              varient="outlined"
              color="secondary"
              type="string"
              sx={{ mb: 2 }}
              label="Name"
              required
            />
            <TextField
              style={{ width: '100%' }}
              varient="outlined"
              color="secondary"
              type="string"
              sx={{ mb: 2 }}
              label="Age"
              required
            />
            <TextField
              style={{ width: '100%' }}
              varient="outlined"
              color="secondary"
              type="string"
              sx={{ mb: 2 }}
              label="Gender"
              required
            />
            <TextField
              style={{ width: '100%' }}
              varient="outlined"
              color="secondary"
              type="string"
              sx={{ mb: 2 }}
              label="Pan Number"
              required
            />
            <TextField
              style={{ width: '100%' }}
              varient="outlined"
              color="secondary"
              type="string"
              sx={{ mb: 2 }}
              label="Aadhaar Number"
              required
            />
            <TextField
              style={{ width: '100%' }}
              varient="outlined"
              color="secondary"
              type="string"
              sx={{ mb: 2 }}
              label="Address"
            />

            <div className="w-full flex justify-center items-center">
              <Button
                style={{
                  background: 'blue',
                  color: 'white',
                  borderRadius: '5rem',
                  width: '50%',
                  marginTop: '2rem',
                }}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserForm;
