import history from '../utils/history';
import routes from '../utils/routes';
import { saveQuestionAnswer } from '../utils/api';

export const SEND_VOTE_SUCCESS = 'SEND_VOTE_SUCCESS';

function redirectToHome() {
  history.push({
    pathname: routes.home,
  });
}

export function sendVote(data) {
  return dispatch => (
    saveQuestionAnswer(data)
      .then(() => {
        redirectToHome();
      })
  );
}
