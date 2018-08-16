import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import classNames from 'classnames';

// Material UI
import { withStyles } from '@material-ui/core/styles';
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

import PlusIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

// Misc
import Types from '../../utils/types';

const VALUE_OPTION_ONE = 'optionOne';
const VALUE_OPTION_TWO = 'optionTwo';

const styles = {
  card: {
    marginTop: 20,
    marginBottom: 20,
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
};

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
            className={classNames(classes.avatar, classes.bigAvatar)}
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

  render() {
    const { answer } = this.state;
    const { classes, question } = this.props;
    const { optionOne, optionTwo } = question;

    return (
      <Card className={classes.card}>
        <CardContent>
          {this.getAuthorData()}
          <FormControl
            component="fieldset"
            className={classes.formControl}
          >
            <RadioGroup
              aria-label="Poll"
              name="poll"
              className={classes.group}
              value={answer}
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
            size="small"
            onClick={this.handleVote}
          >
            <PlusIcon /> Vote
          </Button>
        </CardActions>
      </Card>
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
