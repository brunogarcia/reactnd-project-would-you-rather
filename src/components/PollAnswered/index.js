import React from 'react';
import PropTypes from 'prop-types';
import { CircleMeter } from 'react-svg-meters';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import VotedIcon from '@material-ui/icons/CheckCircleOutline';

// Misc
import Types from '../../utils/types';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 600,
    padding: theme.spacing.unit * 2,
    margin: '2em auto',
  },
  center: {
    textAlign: 'center',
    position: 'relative',
  },
  percentage: {
    marginBottom: '1em',
  },
  yourVote: {
    position: 'absolute',
    top: 0,
    right: '1em',
  },
  voted: {
    color: '#f50057',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: '-10px',
    marginLeft: '5px',
  },
});


/**
 - Text of the option
 - Percentage of people who voted for that option
 - Number of people who voted for that option
 - The option selected by the logged-in user should be clearly marked
 */

const PollAnswered = (props) => {
  const { classes, question, authedUser } = props;
  const { optionOne, optionTwo } = question;

  const getPercentageOfPeopleVoted = (optionVotes) => {
    const total = optionOne.votes.length + optionTwo.votes.length;
    const percentage = (optionVotes.length * 100) / total;
    const percentageFixedPoint = Number.parseFloat(percentage).toFixed(1) * 1;
    return <CircleMeter value={percentageFixedPoint} size={100} />;
  };

  const getNumeberOfPeopleVoted = optionVotes => (
    <p><em>Votes: {optionVotes.length}</em></p>
  );

  const yourVote = () => (
    <p className={classes.yourVote}>
      <VotedIcon color="secondary" />
      <span className={classes.voted}>You</span>
    </p>
  );

  const isAuthedUserVoted = (optionVotes) => {
    const checkVotes = optionVotes.find(vote => vote === authedUser.id);
    return checkVotes ? yourVote() : null;
  };

  return (
    <Paper className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} md={6} className={classes.center}>
          <Grid item className={classes.percentage}>
            {getPercentageOfPeopleVoted(optionOne.votes)}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom>
              {optionOne.text}
            </Typography>
            {getNumeberOfPeopleVoted(optionOne.votes)}
            {isAuthedUserVoted(optionOne.votes)}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.center}>
          <Grid item className={classes.percentage}>
            {getPercentageOfPeopleVoted(optionTwo.votes)}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="title" gutterBottom>
              {optionTwo.text}
            </Typography>
            {getNumeberOfPeopleVoted(optionTwo.votes)}
            {isAuthedUserVoted(optionTwo.votes)}
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

PollAnswered.propTypes = {
  classes: PropTypes.shape().isRequired,
  question: Types.question.isRequired,
  authedUser: PropTypes.shape().isRequired,
};

export default withStyles(styles)(PollAnswered);
