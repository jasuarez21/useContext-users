/* eslint-disable react/jsx-filename-extension */
import React, { useReducer } from 'react';
import axios from 'axios';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import { GET_PROFILE, GET_USERS } from '../types';

const userState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    const data = await axios.get('https://reqres.in/api/users');
    dispatch({
      type: GET_USERS,
      payload: data.data.data
    });
  };

  const getProfile = async (id) => {
    const userSelect = await axios.get(`https://reqres.in/api/users/${id}`);
    dispatch({
      type: GET_PROFILE,
      payload: userSelect.data.data
    });
  };

  return (
    <UserContext.Provider value={{
      users: state.users,
      selectedUser: state.selectedUser,
      getUsers,
      getProfile
    }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default userState;
