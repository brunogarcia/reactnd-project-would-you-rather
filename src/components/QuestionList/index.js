import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import QuestionListItem from '../QuestionListItem';

function QuestionList({ questions }) {
  return (
    <Grid container spacing={24}>
      {questions.map(question => <QuestionListItem key={question.id} question={question} />)}
    </Grid>
  );
}

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default QuestionList;
