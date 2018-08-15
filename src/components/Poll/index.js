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
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import PlusIcon from '@material-ui/icons/Add';

// Misc
import Types from '../../utils/types';
import Loading from '../Loading';

const styles = {
  card: {
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
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

  handleQuestionDetail = (e) => {
    e.preventDefault();
    console.log('hi');
  }

  render() {
    const { isLoading } = this.state;
    const { classes, question } = this.props;
    const { author, optionOne, optionTwo } = question;

    /**
     *
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory',
      },
     */

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
                <ul>
                  <li>{optionOne.text}</li>
                  <li>{optionTwo.text}</li>
                </ul>
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
  handleGetQuestion: PropTypes.func.isRequired,
};

export default withStyles(styles)(Poll);
