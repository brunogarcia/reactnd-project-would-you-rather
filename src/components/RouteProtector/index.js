import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import routes from '../../utils/routes';
import commons from '../../utils/commons';
import { getFromLocalStorage } from '../../utils/localstorage';

export default (ProtectedRoute) => {
  class AuthHOC extends Component {
    isUserLogged = () => getFromLocalStorage(commons.user) !== null;

    redirectToLogin = () => {
      const { history } = this.props;
      history.push({ pathname: routes.login });
    }

    redirectToHome = () => {
      const { history } = this.props;
      history.push({ pathname: routes.home });
    }

    render() {
      return (
        <ProtectedRoute
          {...this.props}
          isUserLogged={this.isUserLogged}
          redirectToHome={this.redirectToHome}
          redirectToLogin={this.redirectToLogin}
        />
      );
    }
  }

  AuthHOC.propTypes = {
    history: PropTypes.shape().isRequired,
  };

  return withRouter(AuthHOC);
};
