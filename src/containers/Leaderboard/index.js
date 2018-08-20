import { connect } from 'react-redux';
import Leaderboard from '../../components/Leaderboard';
import { fetchQuestions } from '../../actions/questions';

function mapStateToProps({ questions }) {
  return {
    questions,
  };
}

const mapDispatchToProps = dispatch => ({
  handleGetQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);
