import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';

// Misc
import Loading from '../Loading';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class Leaderboard extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const {
      handleGetQuestions,
      isUserLogged,
      redirectToLogin,
    } = this.props;

    if (!isUserLogged()) {
      redirectToLogin();
    } else {
      handleGetQuestions()
        .then(() => this.setState({
          isLoading: false,
        }));
    }
  }

  render() {
    const {
      questions,
      classes,
    } = this.props;

    const { isLoading } = this.state;

    console.log(questions);

    return (
      isLoading ? <Loading />
        : (
          <div className={classes.root}>
            Hi
          </div>
        )
    );
  }
}

Leaderboard.propTypes = {
  questions: PropTypes.shape().isRequired,
  handleGetQuestions: PropTypes.func.isRequired,
  isUserLogged: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles, { withTheme: true })(Leaderboard);
