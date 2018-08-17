import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

// Misc
import Types from '../../utils/types';
import Loading from '../Loading';
import PollAnswered from '../PollAnswered';
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

  getAuthedData() {
    const { getAuthedUserData } = this.props;
    return getAuthedUserData();
  }

  getAuthorData(author) {
    const { users } = this.props;

    if (isEmpty(users)) {
      return {};
    }

    return users[author];
  }

  handleVote = (answer) => {
    const { match, handleVotePoll } = this.props;
    const { id: qid } = match.params;
    const authedUser = this.getAuthedData();

    handleVotePoll({
      qid,
      answer,
      authedUser: authedUser.id,
    });
  }

  isPollAnswered() {
    const { question } = this.props;
    const authedUser = this.getAuthedData();

    const optionsOne = question.optionOne.votes.find(id => id === authedUser.id);
    const optionsTwo = question.optionTwo.votes.find(id => id === authedUser.id);

    return (optionsOne || optionsTwo);
  }

  render() {
    const { isLoading } = this.state;
    const { question } = this.props;
    const authedUser = this.getAuthedData();

    return (
      isLoading ? <Loading />
        : (
          <Fragment>
            {
              this.isPollAnswered()
                ? (
                  <PollAnswered
                    question={question}
                    authedUser={authedUser}
                  />
                )
                : (
                  <PollUnanswered
                    question={question}
                    onVotePoll={this.handleVote}
                    author={this.getAuthorData(question.author)}
                  />
                )
            }
          </Fragment>
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
