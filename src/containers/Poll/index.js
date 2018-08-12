import { connect } from 'react-redux';
import Poll from '../../components/Poll';
import { fetchQuestion } from '../../actions/questions';

function mapStateToProps({ questions, users }) {
  return {
    users,
    question: questions.question,
  };
}

const mapDispatchToProps = dispatch => ({
  handleGetQuestion: id => dispatch(fetchQuestion(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);
