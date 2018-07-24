import history from '../utils/history';
import routes from '../utils/routes';
import commons from '../utils/commons';
import { setOnLocalStorage, removeFromLocalStorage } from '../utils/localstorage';

export const USER_LOGGED_IN = 'USER_LOGGED_IN';
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

function userLoggedIn(user) {
  return {
    type: USER_LOGGED_IN,
    payload: {
      user,
    },
  };
}

function userLoggedOut() {
  return {
    type: USER_LOGGED_OUT,
  };
}

function filterUser(users, id) {
  const usersFiltered = users.filter(user => user.id === id);
  return usersFiltered[0];
}

function redirectToHome() {
  history.push({
    pathname: routes.home,
  });
}

export function login(users, id) {
  return (dispatch) => {
    const user = filterUser(users, id);

    setOnLocalStorage(commons.user, user)
      .then(() => {
        redirectToHome();
        dispatch(userLoggedIn(user));
      });
  };
}

export function logout() {
  return (dispatch) => {
    removeFromLocalStorage(commons.user)
      .then(() => {
        dispatch(userLoggedOut());
      });
  };
}
