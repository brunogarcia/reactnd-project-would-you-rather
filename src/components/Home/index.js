import React from 'react';
import PropTypes from 'prop-types';
import Types from '../../utils/types';

const Home = (props) => {
  const { user, isUserLogged, redirectToLogin } = props;

  if (!isUserLogged()) {
    redirectToLogin();
    return false;
  }

  return (
    <p>
      {user.name}
    </p>
  );
};

Home.propTypes = {
  user: Types.user,
  isUserLogged: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
};

Home.defaultProps = {
  user: {
    name: '',
  },
};

export default Home;
