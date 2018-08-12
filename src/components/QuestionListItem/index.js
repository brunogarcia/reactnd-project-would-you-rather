import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import PlusIcon from '@material-ui/icons/Add';

// Misc
import history from '../../utils/history';
import routes from '../../utils/routes';

const styles = {
  card: {
    marginBottom: 20,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function dateNormalized(date) {
  const dateFormat = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  return new Date(date).toLocaleString('en-us', dateFormat);
}

function QuestionListItem(props) {
  const { classes, question } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const handleQuestionDetail = () => (
    history.push({
      pathname: `${routes.questions}/${question.id}`,
    })
  );

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            { dateNormalized(question.timestamp) }
          </Typography>
          <Typography component="p">
            {bull} { question.optionOne.text }
          </Typography>
          <Typography component="p">
            {bull} { question.optionTwo.text }
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleQuestionDetail}
          >
            <PlusIcon /> More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

QuestionListItem.propTypes = {
  classes: PropTypes.shape().isRequired,
  question: PropTypes.shape().isRequired,
};

export default withStyles(styles)(QuestionListItem);
