import { connect } from 'react-redux';
import Leaderboard from '../../components/Leaderboard';
import { fetchQuestions } from '../../actions/questions';

function mapStateToProps({ users, questions }) {
  return {
    users: Object.values(users),
    questions: questions.all,
  };
}

const mapDispatchToProps = dispatch => ({
  handleGetQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
