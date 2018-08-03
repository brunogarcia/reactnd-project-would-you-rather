import { connect } from 'react-redux';
import Home from '../../components/Home';
import { fetchQuestions } from '../../actions/questions';

function mapStateToProps({ questions }) {
  return {
    answered: questions.answered,
    unanswered: questions.unanswered,
  };
}

const mapDispatchToProps = dispatch => ({
  handleGetQuestions: () => dispatch(fetchQuestions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
