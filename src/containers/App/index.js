import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from '../Login';
import Home from '../Home';
import Poll from '../Poll';
import Nav from '../Nav';
import NoMatch from '../../components/NoMatch';
import { fetchUsers } from '../../actions/users';
import routes from '../../utils/routes';
import history from '../../utils/history';
import withAuthorization from '../../components/RouteProtector';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  render() {
    return (
      <Router history={history}>
        <Fragment>
          <CssBaseline />
          <Nav />
          <Switch>
            <Route exact path={routes.login} component={Login} />
            <Route path={routes.home} component={withAuthorization(Home)} />
            <Route path={`${routes.questions}/:id`} component={withAuthorization(Poll)} />
            <Route component={NoMatch} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
