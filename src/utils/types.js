import {
  shape,
  string,
  object,
  arrayOf,
} from 'prop-types';

const userProps = {
  id: string,
  name: string,
  avatarURL: string,
  answers: object,
  questions: arrayOf(string),
};

const user = shape(userProps);

const auth = shape({
  data: shape(userProps),
  loading: string,
});

const classes = shape();

export default { user, auth, classes };
