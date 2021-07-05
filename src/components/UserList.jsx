/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable indent */
import React, { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../context/user/UserContext';

const UserList = () => {
    const { getUsers, getProfile, users } = useContext(UserContext);
    useEffect(() => {
        getUsers();
    }, []);
    return (
      <div className="list-group h-100">
        {
                users.map((user) => (
                  <a
                    href="#!"
                    key={user.id}
                    className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
                    onClick={() => getProfile(user.id)}
                  >
                    <img src={user.avatar} alt={user.first_name} className="img-fluid mr-4 rounded-circle" width="70" />
                    <p>{`${user.first_name} ${user.last_name}`}</p>
                  </a>
))
            }
      </div>
    );
};

export default UserList;
