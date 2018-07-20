import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Login = (props) => {
  const { users } = props;
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

Login.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired,
    answers: PropTypes.object.isRequired,
    questions: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
};

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Login);
