import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

// Misc
import Loading from '../Loading';
import Types from '../../utils/types';

const styles = theme => ({
  root: {
    maxWidth: 600,
    marginTop: theme.spacing.unit * 3,
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowX: 'auto',
  },
  tableCell: {
    textAlign: 'center',
  },
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
});

class Leaderboard extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    const {
      handleGetQuestions,
      isUserLogged,
      redirectToLogin,
    } = this.props;

    if (!isUserLogged()) {
      redirectToLogin();
    } else {
      handleGetQuestions()
        .then(() => this.setState({
          isLoading: false,
        }));
    }
  }

  getQuestionsCreated(author) {
    const { questions } = this.props;
    const list = questions.filter(question => question.author === author);
    return list.length;
  }

  getQuestionsAnswered(author) {
    const { questions } = this.props;
    const list = questions.filter((question) => {
      const { optionOne, optionTwo } = question;
      return (
        optionOne.votes.includes(author) || optionTwo.votes.includes(author)
      );
    });
    return list.length;
  }

  render() {
    const {
      users,
      classes,
    } = this.props;

    const { isLoading } = this.state;

    return (
      isLoading ? <Loading />
        : (
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell>User</TableCell>
                  <TableCell numeric>Created</TableCell>
                  <TableCell numeric>Answered</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map(user => (
                  <TableRow key={user.id}>
                    <TableCell component="th" scope="row">
                      <List>
                        <ListItem>
                          <Avatar
                            alt={user.name}
                            src={user.avatarURL}
                            className={classNames(classes.avatar, classes.bigAvatar)}
                          />
                          <ListItemText primary={user.name} />
                        </ListItem>
                      </List>
                    </TableCell>
                    <TableCell className={classes.tableCell} numeric>
                      {this.getQuestionsCreated(user.id)}
                    </TableCell>
                    <TableCell className={classes.tableCell} numeric>
                      {this.getQuestionsAnswered(user.id)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        )
    );
  }
}

Leaderboard.propTypes = {
  users: PropTypes.arrayOf(Types.user).isRequired,
  questions: PropTypes.arrayOf(Types.question).isRequired,
  handleGetQuestions: PropTypes.func.isRequired,
  isUserLogged: PropTypes.func.isRequired,
  redirectToLogin: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles, { withTheme: true })(Leaderboard);
