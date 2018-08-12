import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import Types from '../../utils/types';
import Loading from '../Loading';

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
    const { users } = this.props;

    if (isEmpty(users)) {
      return null;
    }

    return (
      <p>
        { users[author].name }
        <img
          src={users[author].avatarURL}
          alt={users[author].name}
          width="100"
        />
      </p>
    );
  }

  render() {
    const { isLoading } = this.state;
    const { question } = this.props;
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
          <Fragment>
            <p>
              Would You Rather
            </p>
            {this.getUserData(author)}
            <ul>
              <li>{optionOne.text}</li>
              <li>{optionTwo.text}</li>
            </ul>
            <button type="button">
              Send
            </button>
          </Fragment>
        )
    );
  }
}

Poll.propTypes = {
  match: PropTypes.shape().isRequired,
  users: PropTypes.shape().isRequired,
  question: Types.question.isRequired,
  handleGetQuestion: PropTypes.func.isRequired,
};

export default Poll;
