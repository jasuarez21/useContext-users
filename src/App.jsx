import React from 'react';
import Profile from './components/Profiles';
import UserList from './components/UserList';
import UserState from './context/user/UserState';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <UserState>
        <Profile />
        <UserList />
      </UserState>
    </>

  );
}

export default App;
