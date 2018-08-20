import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import VoteIcon from '@material-ui/icons/ThumbUp';
import Button from '@material-ui/core/Button';

// Misc
import Types from '../../utils/types';

const VALUE_OPTION_ONE = 'optionOne';
const VALUE_OPTION_TWO = 'optionTwo';

const styles = theme => ({
  card: {
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
  button: {
    margin: theme.spacing.unit,
  },
});

class PollUnanswered extends Component {
  state = {
    answer: '',
  };

  getAuthorData() {
    const { classes, author } = this.props;
    if (isEmpty(author)) {
      return null;
    }

    return (
      <List>
        <ListItem>
          <Avatar
            alt={author.name}
            src={author.avatarURL}
            className={classes.avatar}
          />
          <ListItemText primary={author.name} secondary="Author" />
        </ListItem>
      </List>
    );
  }

  handleOptionChange = (event) => {
    this.setState({
      answer: event.target.value,
    });
  }

  handleVote = (event) => {
    event.preventDefault();
    const { answer } = this.state;
    const { onVotePoll } = this.props;

    onVotePoll(answer);
  }

  isDisabled() {
    const { answer } = this.state;
    return isEmpty(answer);
  }

  render() {
    const { answer } = this.state;
    const { classes, question } = this.props;
    const { optionOne, optionTwo } = question;

    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Card className={classes.card}>
          <CardContent>
            {this.getAuthorData()}
            <FormControl
              component="fieldset"
              className={classes.formControl}
            >
              <RadioGroup
                name="poll"
                value={answer}
                aria-label="Poll"
                className={classes.group}
                onChange={this.handleOptionChange}
              >
                <FormControlLabel
                  value={VALUE_OPTION_ONE}
                  control={<Radio />}
                  label={optionOne.text}
                />
                <FormControlLabel
                  value={VALUE_OPTION_TWO}
                  control={<Radio />}
                  label={optionTwo.text}
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button
              disabled={this.isDisabled()}
              color="primary"
              variant="contained"
              type="submit"
              className={classes.button}
              onClick={this.handleVote}
            >
              <VoteIcon />
              &nbsp;
              Vote
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

PollUnanswered.propTypes = {
  classes: PropTypes.shape().isRequired,
  author: PropTypes.shape().isRequired,
  question: Types.question.isRequired,
  onVotePoll: PropTypes.func.isRequired,
};

export default withStyles(styles)(PollUnanswered);
