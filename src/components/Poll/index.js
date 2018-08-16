import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import classNames from 'classnames';

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

import PlusIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';

// Misc
import Types from '../../utils/types';
import Loading from '../Loading';

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

class Poll extends Component {
  state = {
    answer: '',
    isLoading: true,
  };

  componentDidMount() {
    const { handleGetQuestion, match } = this.props;
    const { id } = match.params;

    handleGetQuestion(id)
      .then(() => this.setState({
        isLoading: false,
      }));
  }

  getUserData(author) {
    const { classes, users } = this.props;

    if (isEmpty(users)) {
      return null;
    }

    return (
      <List>
        <ListItem>
          <Avatar
            alt={users[author].name}
            src={users[author].avatarURL}
            className={classNames(classes.avatar, classes.bigAvatar)}
          />
          <ListItemText primary={ users[author].name } secondary="Author" />
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
    const { match, getUserData, handleVotePoll } = this.props;
    const { id: qid } = match.params;
    const user = getUserData();

    handleVotePoll({
      authedUser: user.id,
      qid,
      answer,
    });
  }

  render() {
    const { isLoading, answer } = this.state;
    const { classes, question } = this.props;
    const { author, optionOne, optionTwo } = question;

    return (
      isLoading ? <Loading />
        : (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Card className={classes.card}>
              <CardContent>
                {this.getUserData(author)}
                <FormControl component="fieldset" className={classes.formControl}>
                  <RadioGroup
                    aria-label="Poll"
                    name="poll"
                    className={classes.group}
                    value={answer}
                    onChange={this.handleOptionChange}
                  >
                    <FormControlLabel value="optionOne" control={<Radio />} label={optionOne.text} />
                    <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwo.text} />
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
          </Grid>
        )
    );
  }
}

Poll.propTypes = {
  match: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  users: PropTypes.shape().isRequired,
  question: Types.question.isRequired,
  getUserData: PropTypes.func.isRequired,
  handleGetQuestion: PropTypes.func.isRequired,
  handleVotePoll: PropTypes.func.isRequired,
};

export default withStyles(styles)(Poll);
