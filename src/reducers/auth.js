import { AUTH_USER } from '../actions/auth';

export default function users(state = {}, action) {
  switch (action.type) {
    case AUTH_USER: {
      const usersFiltered = action.users
        .filter(user => user.id === action.id);
      return usersFiltered[0];
    }
    default:
      return state;
  }
}
