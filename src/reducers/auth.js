import { USER_LOGGED_IN, USER_LOGGED_OUT } from '../actions/auth';

const initialState = {
  data: null,
  isLoading: false,
};

export default function users(state = initialState, { type, payload }) {
  switch (type) {
    case USER_LOGGED_IN: {
      return {
        data: payload.user,
        isLoading: false,
      };
    }
    case USER_LOGGED_OUT:
      return initialState;
    default:
      return state;
  }
}
