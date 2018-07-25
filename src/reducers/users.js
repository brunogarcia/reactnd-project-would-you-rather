import { SAVE_USERS } from '../actions/users';

export default function users(state = [], { type, payload }) {
  switch (type) {
    case SAVE_USERS:
      return Object.values(payload.users);
    default:
      return state;
  }
}
