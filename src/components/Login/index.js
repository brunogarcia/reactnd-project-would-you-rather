import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    userSelected: '',
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { users, classes } = this.props;
    const { userSelected } = this.state;

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
                value={userSelected}
                onChange={this.handleChange}
                inputProps={{
                  name: 'userSelected',
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
            <Button variant="contained" color="primary" className={classes.button}>
              Go!
            </Button>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
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

export default withStyles(styles)(connect(mapStateToProps)(Login));
