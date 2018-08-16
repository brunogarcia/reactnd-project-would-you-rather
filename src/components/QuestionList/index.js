import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';
import Grid from '@material-ui/core/Grid';
import QuestionListItem from '../QuestionListItem';

function QuestionList({ questions }) {
  if (isEmpty(questions)) {
    return <p>There are no more questions!</p>;
  }

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
