import React from 'react';
import Types from '../../utils/types';

const Home = (props) => {
  const { auth } = props;
  return (
    <p>
      {auth.name}
    </p>
  );
};

Home.propTypes = {
  auth: Types.user.isRequired,
};

export default Home;
