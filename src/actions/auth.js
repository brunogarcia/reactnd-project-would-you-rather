export const AUTH_USER = 'AUTH_USER';

export function authUser(users, id) {
  return {
    type: AUTH_USER,
    users,
    id,
  };
}
