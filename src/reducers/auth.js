import { AUTH_USER } from '../actions/auth';

export default function users(state = [], action) {
  switch (action.type) {
    case AUTH_USER:
      return action.users
        .filter(user => user.id === action.id);
    default:
      return state;
  }
}
