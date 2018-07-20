import { SET_USERS } from '../actions/users';

export default function users(state = [], action) {
  switch (action.type) {
    case SET_USERS:
      return Object.values(action.users);
    default:
      return state;
  }
}
