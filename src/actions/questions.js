import { getQuestions } from '../utils/api';

export const FILTER_QUESTIONS = 'FILTER_QUESTIONS';

function filterQuestions(questions) {
  return {
    type: FILTER_QUESTIONS,
    payload: {
      questions: Object.values(questions),
    },
  };
}

export function fetchQuestions() {
  return (dispatch) => {
    getQuestions()
      .then(questions => dispatch(filterQuestions(questions)));
  };
}
