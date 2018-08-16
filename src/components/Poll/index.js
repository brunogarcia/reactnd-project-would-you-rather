import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

// Material UI
import Grid from '@material-ui/core/Grid';

// Misc
import Types from '../../utils/types';
import Loading from '../Loading';
import PollUnanswered from '../PollUnanswered';

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

  getAuthorData(author) {
    const { users } = this.props;

    if (isEmpty(users)) {
      return {};
    }

    return users[author];
  }

  handleVote = (answer) => {
    const { match, getAuthedUserData, handleVotePoll } = this.props;
    const { id: qid } = match.params;
    const authedUser = getAuthedUserData();

    handleVotePoll({
      authedUser: authedUser.id,
      qid,
      answer,
    });
  }

  render() {
    const { isLoading } = this.state;
    const { question } = this.props;

    return (
      isLoading ? <Loading />
        : (
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <PollUnanswered
              question={question}
              onVotePoll={this.handleVote}
              author={this.getAuthorData(question.author)}
            />
          </Grid>
        )
    );
  }
}

Poll.propTypes = {
  match: PropTypes.shape().isRequired,
  question: Types.question.isRequired,
  users: PropTypes.shape().isRequired,
  getAuthedUserData: PropTypes.func.isRequired,
  handleGetQuestion: PropTypes.func.isRequired,
  handleVotePoll: PropTypes.func.isRequired,
};

export default Poll;
