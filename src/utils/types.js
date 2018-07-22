import {
  shape,
  string,
  object,
  arrayOf,
} from 'prop-types';

const user = shape({
  id: string,
  name: string,
  avatarURL: string,
  answers: object,
  questions: arrayOf(string),
});

const classes = shape();

export default { user, classes };
