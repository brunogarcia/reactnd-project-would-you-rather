import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from '../Login';
import Home from '../Home';
import Nav from '../Nav';
import NoMatch from '../../components/NoMatch';
import { fetchUsers } from '../../actions/users';
import routes from '../../utils/routes';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <CssBaseline />
          <Nav />
          <Switch>
            <Route exact path={routes.login} component={Login} />
            <Route path={routes.home} component={Home} />
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
