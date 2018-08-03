import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Types from '../../utils/types';
import Loading from '../Loading';

class QuestionDetails extends Component {
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

  render() {
    const { question } = this.props;
    const { isLoading } = this.state;

    return (
      isLoading ? <Loading />
        : (
          <p>
            { question.author }
          </p>
        )
    );
  }
}

QuestionDetails.propTypes = {
  match: PropTypes.shape().isRequired,
  question: Types.question.isRequired,
  handleGetQuestion: PropTypes.func.isRequired,
};

export default QuestionDetails;
