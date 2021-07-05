import React, { useContext } from 'react';

import UserContext from '../context/user/UserContext';

const Profile = () => {
  const { selectedUser } = useContext(UserContext);
  return (
    <>
      {selectedUser ? (
        <div>
          <img src={selectedUser.avatar} alt={selectedUser.first_name} className="rounded-circle" width="70" />
          <h1>{selectedUser?.first_name}</h1>
          <h3>{selectedUser?.email}</h3>
        </div>
      ) : (
        <h1>No user selected!</h1>
      )}
    </>
  );
};

export default Profile;
