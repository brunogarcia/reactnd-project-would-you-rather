import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Question from '../Question';

function QuestionList({ questions }) {
  return (
    <Grid container spacing={24}>
      {questions.map(question => <Question key={question.id} question={question} />)}
    </Grid>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default QuestionList;
