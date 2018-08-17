import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    margin: '2em auto',
  },
  textField: {
    width: '90%',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class PollNew extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
  };

  getAuthedData() {
    const { getAuthedUserData } = this.props;
    return getAuthedUserData();
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const authedUser = this.getAuthedData();
    const { handleSendQuestion } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    handleSendQuestion({
      author: authedUser.id,
      optionOneText,
      optionTwoText,
    });
  }

  isDisabled() {
    const { optionOneText, optionTwoText } = this.state;
    return isEmpty(optionOneText) || isEmpty(optionTwoText);
  }

  render() {
    const { classes } = this.props;
    const { optionOneText, optionTwoText } = this.state;

    return (
      <Paper className={classes.root}>
        <Typography variant="subheading" gutterBottom>
          Create a new poll
        </Typography>
        <form
          noValidate
          autoComplete="off"
          onSubmit={this.handleSubmit}
          className={classes.container}
        >
          <TextField
            margin="normal"
            id="optionOneText"
            label="Question one"
            value={optionOneText}
            className={classes.textField}
            onChange={this.handleChange('optionOneText')}
          />
          <br />
          <TextField
            margin="normal"
            id="optionTwoText"
            label="Question two"
            value={optionTwoText}
            className={classes.textField}
            onChange={this.handleChange('optionTwoText')}
          />
          <br /><br />
          <Button
            disabled={this.isDisabled()}
            color="primary"
            variant="contained"
            type="submit"
            className={classes.button}
          >
            Send
          </Button>
        </form>
      </Paper>
    );
  }
}

PollNew.propTypes = {
  classes: PropTypes.shape().isRequired,
  getAuthedUserData: PropTypes.func.isRequired,
  handleSendQuestion: PropTypes.func.isRequired,
};

export default withStyles(styles)(PollNew);