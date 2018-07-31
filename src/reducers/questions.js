import { FILTER_QUESTIONS } from '../actions/questions';
import commons from '../utils/commons';
import { getFromLocalStorage } from '../utils/localstorage';

const defaultState = {
  answered: [],
  unanswered: [],
};

export default function questions(state = defaultState, { type, payload }) {
  switch (type) {
    case FILTER_QUESTIONS: {
      const { questions: allQuestions } = payload;
      const userID = getFromLocalStorage(commons.user).id;
      const answered = [];
      const unanswered = [];

      allQuestions.filter((question) => {
        const optionsOne = question.optionOne.votes.find(id => id === userID);
        const optionsTwo = question.optionTwo.votes.find(id => id === userID);

        if (optionsOne || optionsTwo) {
          return answered.push(question);
        }

        return unanswered.push(question);
      });

      return {
        answered: answered.sort((a, b) => b.timestamp - a.timestamp),
        unanswered: unanswered.sort((a, b) => b.timestamp - a.timestamp),
      };
    }
    default:
      return state;
  }
}
