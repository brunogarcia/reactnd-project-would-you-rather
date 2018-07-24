import React from 'react';
import Types from '../../utils/types';

const Home = (props) => {
  const { user } = props;
  return (
    <p>
      {user.name}
    </p>
  );
};

Home.propTypes = {
  user: Types.user.isRequired,
};

export default Home;
