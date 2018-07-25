import history from '../utils/history';
import routes from '../utils/routes';
import commons from '../utils/commons';
import { saveOnLocalStorage, removeFromLocalStorage } from '../utils/localstorage';

export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';

function loggedIn(user) {
  return {
    type: LOGGED_IN,
    payload: {
      user,
    },
  };
}

function loggedOut() {
  return {
    type: LOGGED_OUT,
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

function redirectToLogin() {
  history.push({
    pathname: routes.login,
  });
}

export function login(users, id) {
  return (dispatch) => {
    const user = filterUser(users, id);

    saveOnLocalStorage(commons.user, user)
      .then(() => {
        redirectToHome();
        dispatch(loggedIn(user));
      });
  };
}

export function logout() {
  return (dispatch) => {
    removeFromLocalStorage(commons.user)
      .then(() => {
        redirectToLogin();
        dispatch(loggedOut());
      });
  };
}
