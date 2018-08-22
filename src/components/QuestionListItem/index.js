import React from 'react';
import PropTypes from 'prop-types';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
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
  avatar: {
    margin: 10,
    width: 60,
    height: 60,
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
  const { classes, users, question } = props;

  const {
    id,
    author,
    timestamp,
    optionOne,
    optionTwo,
  } = question;

  const handleQuestionDetail = () => (
    history.push({
      pathname: `${routes.questions}/${id}`,
    })
  );

  return (
    <Grid item xs={12} sm={6} md={6} lg={4}>
      <Card className={classes.card}>
        <CardContent>
          <List>
            <ListItem>
              <Avatar
                alt={users[author].name}
                src={users[author].avatarURL}
                className={classes.avatar}
              />
              <ListItemText
                primary={`By ${users[author].name}`}
                secondary={`posted at ${dateNormalized(timestamp)}`}
              />
            </ListItem>
          </List>
          <Typography component="p" align="center">
            &quot;{ optionOne.text }&quot; or &quot;{ optionTwo.text }&quot;
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
  users: PropTypes.shape().isRequired,
  classes: PropTypes.shape().isRequired,
  question: PropTypes.shape().isRequired,
};

export default withStyles(styles)(QuestionListItem);
