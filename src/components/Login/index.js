import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

// Misc
import { authUser } from '../../actions/auth';
import routes from '../../utils/routes';
import Types from '../../utils/types';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '50vh',
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    width: '100%',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class Login extends Component {
  state = {
    userID: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = () => {
    const { userID } = this.state;
    const { dispatch, users, history } = this.props;

    // Dispach action
    dispatch(authUser(users, userID));

    // Redirect to home
    history.push({
      pathname: routes.home,
    });
  };

  render() {
    const { userID } = this.state;
    const { users, classes } = this.props;

    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.root}
        spacing={16}
      >
        <Grid item xs={6}>
          <Typography variant="display1" gutterBottom>
            Login
          </Typography>
          <Paper className={classes.paper} elevation={1}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="users">
                Select a user
              </InputLabel>
              <Select
                value={userID}
                onChange={this.handleChange}
                inputProps={{
                  name: 'userID',
                  id: 'users',
                }}
              >
                {users.map(user => (
                  <MenuItem key={user.id} value={user.id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              disabled={userID === ''}
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleSubmit}
            >
              Go!
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: Types.classes.isRequired,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  users: PropTypes.arrayOf(Types.user).isRequired,
};

export default withStyles(styles)(Login);
