import React, { useState, useEffect } from 'react';
import TemporaryDrawer from '../../components/SideBar';
import { Button } from '@mui/material';
import ChitBox from '../../components/ChitBox';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserHome = () => {
  const navigate = useNavigate();
  const handleOnClick = (id) => navigate(`/chit/${id}`);

  const [allUserData, setAllUserData] = useState('');

  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios
      .get(`${apiUrl}/user/chitti`)
      .then((response) => {
        const chitList = response.data.data;

        const chitsData = chitList.map((chit) => (
          <div style={{ cursor: 'pointer' }} onClick={() => {
            navigate(`/chit/${chit._id}`)
          }}>
            <ChitBox
              key={chit._id}
              chitName={chit.name}
              companyName={chit.company_name}
              amount={chit.amount}
            />
          </div>
        ));
        setAllUserData(chitsData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // axios.get(`${apiUrl}/user/chitti`)
  //   .then(response => {
  //     const userData = response.data.data;
  //     console.log(userData);

  //     const usersData = userData.map(user => (
  //       <ChitBox key={user.id} chitName={user.name} companyName={user.company_name} amount={user.amount}  />
  //     ));
  //     setAllUserData(usersData);
  //   })
  //   .catch(error => {
  //     console.log(`${apiUrl}/${userId}`);
  //     console.log(error)
  //   });

  return (
    <>
      <div
        className="userhome"
        style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}
      >
        <TemporaryDrawer />
        <div style={{ marginTop: '4rem', flex: 1, padding: '2.5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <h1 className="text-2xl font-bold font-sans">Your Chits</h1>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Button
                style={{
                  background: 'blue',
                  color: 'white',
                  borderRadius: '5px',
                  height: '2rem',
                  width: '6rem',
                  textTransform: 'none',
                }}
                onClick={() => console.log('Filter Clicked')}
              >
                Filter
              </Button>
              <Button
                style={{
                  background: 'green',
                  color: 'white',
                  borderRadius: '5px',
                  height: '2rem',
                  width: '6rem',
                  textTransform: 'none',
                }}
                onClick={() => console.log('Chit Clicked')}
              >
                Add Chit
              </Button>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingBlock: '1rem',
            }}
          >
            <div style={{ width: '100%' }}>
              {/* <ChitBox  chitName="XYZ Chitti" companyName="ABC Company" amount="7000"/>
            <ChitBox  chitName="ABC Chitti" companyName="XYZ Company" amount="8000"/> */}
              {allUserData}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
