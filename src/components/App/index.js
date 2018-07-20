import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from '../Login';
import { fetchUsers } from '../../actions/users';
import './styles.css';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers());
  }

  render() {
    return (
      <div className="App">
        <Login />
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(App);
