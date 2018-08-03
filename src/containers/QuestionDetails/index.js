import { connect } from 'react-redux';
import QuestionDetails from '../../components/QuestionDetails';
import { fetchQuestion } from '../../actions/questions';

function mapStateToProps({ questions }) {
  return {
    question: questions.question,
  };
}

const mapDispatchToProps = dispatch => ({
  handleGetQuestion: id => dispatch(fetchQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetails);
