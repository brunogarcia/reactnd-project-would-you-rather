import { getUsers } from '../utils/api';

export const SET_USERS = 'SET_USERS';
export const AUTH_USER = 'AUTH_USER';

function setUsers(users) {
  return {
    type: SET_USERS,
    users,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    getUsers()
      .then(data => dispatch(setUsers(data)));
  };
}

export function authUser(id) {
  return {
    type: AUTH_USER,
    id,
  };
}
