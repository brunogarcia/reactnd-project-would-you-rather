import { getUsers } from '../utils/api';

export const SET_USERS = 'SET_USERS';

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
